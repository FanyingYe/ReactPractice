const topicURL = "https://wbdv-generic-server.herokuapp.com/api/Chengcheng/topics"
const widgetURL = "https://wbdv-generic-server.herokuapp.com/api/Chengcheng/widget"

export const findWidgetsForTopic =(topicId) =>
    fetch(`${topicURL}/${topicId}/widgets`)
        .then(response => response.json())

export const createWidget =(topicId, widget) =>
    fetch(`${topicURL}/${topicId}/widgets`,{
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            "content-type":"application/json"
        }
    }).then(response =>response.json())
export const deleteWidget =(widgetId) =>
    fetch(`${widgetURL}/${widgetId}`,{
        method:"DELETE"
    }).then(response =>response.json())

export const updateWidget = (WidgetId,newWidget) =>
    fetch(`${widgetURL}/${WidgetId}`, {
        method: "PUT",
        body: JSON.stringify(newWidget),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const updateallWidgets =(topicId,widgets) =>
    fetch(`${topicURL}/${topicId}/widgets`,{
        method: "PUT",
        body: JSON.stringify(widgets),
        headers: {
            "content-type": "application/json"
        }
    })

export default {findWidgetsForTopic, 
                createWidget,
                deleteWidget,
                updateWidget,
                updateallWidgets}