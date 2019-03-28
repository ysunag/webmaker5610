const mongoose = require('mongoose');
const widgetSchema = require('./widget.schema.server');

const widgetModel = mongoose.model("Widget", widgetSchema);
const pageModel = require("../page/page.model.server");



widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;

module.exports = widgetModel;




function createWidget(pageId, widget) {
  console.log("create widget in mongoose: " + widget.toString());
  return widgetModel.create(widget)
    .then(function(responseWidget){
      console.log("created widget is " + responseWidget.toString());
      pageModel.findPageById(pageId)
        .then(function(page){
          console.log("Found page: " + page.toString());
          page.widgets.push(responseWidget);
          page.save();
          console.log("going to return widget: " + responseWidget);
        });
      return responseWidget;
    });
}


function findAllWidgetsForPage(pageId) {
  return widgetModel.find({"pageId": pageId})
  //.populate('developerId')
    .populate('pageId', 'name')
    .exec();
}



function findWidgetById(id) {
  return widgetModel.findOne({_id: id});
}



function updateWidget(widgetId, widget) {
  return widgetModel.findOneAndUpdate({_id: widgetId},widget)
    .then(function (responseWidget) {
      pageModel.updateOne(
        { "_id" : responseWidget.pageId, "widgets._id": widgetId },
        { "$set": { "widgets.$": responseWidget}}).then(
        function(err, res) {
          console.log(res);
        })
      return responseWidget;
    });
}



function deleteWidget(widgetId) {
  return widgetModel.findOneAndDelete({_id: widgetId})
    .then(function (responseWidget) {
      pageModel.findOne({
        _id: responseWidget.pageId
      })
        .then(function (page) {
          if (page) {
            page.widgets = page.widgets.filter(function (widget) {
              return widget._id !== widgetId
            })
            page.save();
            console.log('widget removed from page');
            return page;
          }
        })
        .catch(function (err) {
          console.log("remove widget from page error:" + err);
        });
    });
}

function reorderWidget(pageId, start, end) {
  return pageModel
    .findOne({ _id: pageId })
    .then(function (page) {
      if (page) {
        array_swap(page.widgets, start, end);
        page.save();
        console.log('widgets reordered');
      }
    })
    .catch(function (err) {
      console.log("reorder widget error:" + err);
    });

}


function array_swap(arr, old_index, new_index) {
  while (old_index < 0) {
    old_index += arr.length;
  }
  while (new_index < 0) {
    new_index += arr.length;
  }
  if (new_index >= arr.length) {
    let k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
 // arr.splice(endIndex, 0, arr.splice(startIndex, 1));
}
