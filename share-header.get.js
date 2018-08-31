// located at /var/lib/docker/volumes/container1-tomcat/_data/webapps/share/WEB-INF/classes/alfresco/site-webscripts/org/alfresco/share/header/


// default settings
<import resource="classpath:/alfresco/site-webscripts/org/alfresco/share/imports/share-header.lib.js">

model.jsonModel = {
   rootNodeId: "share-header",
   services: getHeaderServices(),
   widgets: [
      {
         id: "SHARE_VERTICAL_LAYOUT",
         name: "alfresco/layout/VerticalWidgets",
         config: 
         {
            widgets: getHeaderModel()
         }
      }
   ]
};

// Hide elements of the header.
widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_SHARED_FILES");
widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_MY_FILES"); 
widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_HOME");
widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_SITES_MENU");
widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_TASKS");
widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_REPOSITORY");
widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_PEOPLE");


widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_USER_MENU_DASHBOARD");
widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_USER_MENU_PROFILE");
widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_USER_MENU_HELP");
widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_USER_MENU_HOME_PAGE_GROUP");
widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_USER_MENU_SET_CURRENT_PAGE_AS_HOME");
widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_USER_MENU_SET_DASHBOARD_AS_HOME");

//widgetUtils.deleteObjectFromArray(model.jsonModel, "id", "HEADER_ADMIN_CONSOLE");

// Replace existing menu item for a menu bar popup with a custom links.
var adminMenu = widgetUtils.findObject(model.jsonModel, "id", "HEADER_ADMIN_CONSOLE");
if (adminMenu != null)
{
   adminMenu.name = "alfresco/header/AlfMenuBarPopup";
   delete adminMenu.config.targetUrl;
   adminMenu.config.widgets = [

				{
                  name: "alfresco/header/AlfMenuItem",
                  config:
                  {
                     label: "Tag Manager",
                     targetUrl: "console/admin-console/tag-management"
                  }
               },
				{
                  name: "alfresco/header/AlfMenuItem",
                  config:
                  {
                     label: "Shared",
                     targetUrl: "context/shared/sharedfiles"
                  }
               }
   
   ];
   adminMenu.config.label = "Admin";
}
