---
title: "Custom field widget development"
weight: 8
typora-root-url: ..\..\..\static
---

## Introduction

There are currently 16 predefined field or control widgets available to use in forms and processes, covering 3 categories: [Input](/docs/platform/controls/input/), [Layout](/docs/platform/controls/layout/) and [Actions](/docs/platform/controls/actions/). Click on the relevant links to find out more about each area. However if customised fields have been created, they are available to those with the role **Administration** and **Design business process** to use in process and form design in Kianda **Designer**. Customised fields are available under the **Custom controls** category.

Custom controls are created by **Administrators** or **Developers** who have coding experience to use Kianda's low-code development feature, Kianda **Developer**. 

## How to get started

If you are an experienced developer with an **Administrator** or **Developer** role (see [Users & Groups](/docs/platform/administration/users/)), you can create a new custom widget within Kianda by doing the following: 

1. Navigate to **Administration** in the left-hand side menu, and click on **Developer**. This will bring you to the **Developer resources** page.

   ***Widget view***

   ![Widget view](/images/widgetview2.jpg)

2. Click on **New widget** to create a new field/control widget.

3. Fill out the **Edit widget** dialog box - that is **Title**, **Unique Id** (which is autofilled from the title), **Widget Icon**, where you can select from hundreds of icons, and then **Widget type**. 

   ![Edit widget](/images/editwidget.gif)

4. Click on **OK** when complete.

5. When you create a custom field widget, the **Widget UI** and **Widget Code** tabs are displayed. These two screenshots show the default code for 'Widget UI' and 'Widget Code'.

      The 'Widget UI' defines the HTML, handlers, expressions and more, see [Sample widget UI code](#sample-widget-ui-code) for an example of code that creates an interactive image display field. The code below uses Ember templating library, Handlebars JS as seen by {{}} below.

      ***Field widget UI***
      ![Widget UI](/images/widgetfieldui.gif)

      The 'Widget Code' defines the logic and functions.

      ***Field widget code***

      ![Widget code](/images/widgetcodefield.png)

6. Widgets created are visible in the main widget view. From here, you can edit a widget by clicking on the **Edit** button  ![Pen button](/images/bluepen.png) (Pen icon), delete a widget by clicking on the **Bin/Trash** button ![Bin button](/images/binicon.png) and restore earlier versions of a widget by clicking on the **Version restore** button ![Restore](/images/bluerestore.png).

7. Custom field widgets you create will be available for use in Kianda Designer by going to **Side menu** > **Administration** > **Designer** > **click on an existing process** or **Add new** to add a new process (then click on a form to edit it), and see the Custom fields added under **Controls**.

      ![Custom fields](/images/customcontrol.png)



## Sample widget text

The following sample widget code creates a custom field that can be used to create an interactive form design. You will find commented code that you can try out in the UI tab and code tab of the **field widget** editor in Kianda **Developer**.

**Sample Custom field Widget UI** code is as follows:

```javascript
{{#if (eq displayMode "design")}}
    <select class="form-control" id="entityType">
  	<option value="">Please configure my settings before use</option> {{! Prompt the user to set the custom fields settings when in design mode}}
	</select>
{{/if}}

{{#if (eq displayMode "edit")}}
  <select class="form-control" id="entityType" onchange={{action 'frameSelected' value="target.value"}}> {{! Dropdown with a call to an action in widget code to change the picture on select}}
  	<option value="">Select</option>
    <option value="https://i.etsystatic.com/9126655/r/il/9e5871/1570989181/il_fullxfull.1570989181_monu.jpg">Green</option> {{! Dropdown is populated with frames to put in the image field}}
    <option value="https://i.etsystatic.com/9126655/r/il/a99539/2385100329/il_570xN.2385100329_l7ju.jpg">Red</option>
    <option value="https://i.etsystatic.com/9126655/r/il/a31b15/2339396272/il_570xN.2339396272_kai0.jpg">Yellow</option>
    <option value="https://i.etsystatic.com/9126655/r/il/b36fd3/3101702890/il_570xN.3101702890_51ek.jpg">Purple</option>
	</select>
{{/if}}

{{#if (eq displayMode "settings")}}
	<div class="form-group">
	<label class="control-label">Image to place pictures into</label>
    {{field-picker process=process required=true allowText=false includes='["fields/field-image"]' value=field.settings.imageDestination}} {{! Allow the user to select an image field to put the frame into}}
    <label class="control-label">Field to display warning message in</label>
	{{field-picker process=process required=true allowText=false value=field.settings.warningMessage}} {{! Allow the user to select a text field to display the warning message in}}
</div>
{{/if}}
	
{{#if (eq displayMode "display")}}
    <select class="form-control" onchange={{action 'frameSelected' value="target.value"}} > {{! Dropdown with a call to an action in widget code to change the picture on select}}
  	<option value="">Select</option>
    <option value="https://i.etsystatic.com/9126655/r/il/9e5871/1570989181/il_fullxfull.1570989181_monu.jpg">Green</option> {{! Dropdown is populated with frames to put in the image field}}
    <option value="https://i.etsystatic.com/9126655/r/il/a99539/2385100329/il_570xN.2385100329_l7ju.jpg">Red</option>
	</select>
{{/if}} 
```

**Sample Custom field widget code **

```javascript
{
 edit:function(){
	var field = this.get('field');
    var process = this.get('field.process');
    var warningMessage = process.findFieldByName(this.get("field.settings.warningMessage.name")); //Retrieve the warning message field
    warningMessage.set("visible", true); //Set warning messsage field to visible as we are in edit mode
    warningMessage.set("enabled", false); //Set warning message field to disabled to avoid a user editing the text in it
    warningMessage.set("text", "Preview mode: Not actual process"); //Set the warning message field text
 },
 display:function(){
    var field = this.get('field');
    var process = this.get('field.process');
    var warningMessage = process.findFieldByName(this.get("field.settings.warningMessage.name")); //Retrieve the warning message field
	warningMessage.set("visible", false); //Set warning messsage field to invisible as we are in display mode
 },
  actions: {
    frameSelected: function(image) {
       var field = this.get('field');
       var process = this.get('field.process');
       var imageDestination = process.findFieldByName(this.get("field.settings.imageDestination.name")); //Retrieve the image field selected as the destination
       imageDestination.set("text", image);
     },
  }
}
```

The outcome from this code used in a Kianda form can be seen in the next section [Field output](#field-output).

### Field output



## What's next ![Idea icon](/images/18.png)

To continue with low-code development, you can view [Templating basics](/docs/low-code/templating-basics/). If you would like to learn more about ‘no-code versus low-code’ in general, see [What is no-code?](/docs/getting-started/welcome/no-code/) and [What is low-code?](/docs/getting-started/welcome/low-code/). 





