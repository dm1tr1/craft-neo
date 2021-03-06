## Changelog

#### v1.3.1
- `Fixed` Fixed incompatibility with PHP 5.5 and below introduced in `1.3.0`
- `Fixed` Fixed bug where leaving editing an element would always show the confirm dialog, regardless if anything changed
- `Fixed` Minor UI fix with field-less tabs on child blocks having incorrect background color

#### v1.3.0
- `Added` Added ability to duplicate blocks
- `Added` Added ability to have blank tabs in block type field layouts
- `Improved` Generating search keywords for Neo fields are now offloaded to a task, dramatically reducing saving time
- `Improved` Blocks now only save if their content has been modified, reducing saving time
- `Improved` Block field templates are now cached for improved rendering performance
- `Improved` Javascript (Babel) polyfills now only load if necessary
- `Fixed` Can now use comparison querying (eg. `'>=3'`) on level property in live preview
- `Fixed` Filtering Neo blocks by `typeId` now works correctly

#### v1.2.1
- `Improved` When editing Neo fields, block types and groups are now inserted after the currently selected item
- `Fixed` Added support for Reasons v1.0.4
- `Fixed` Implemented a way of using Twig variables in Asset (and potentially other) field settings for Neo blocks

#### v1.2.0
- `Improved` Block type buttons will now not be grouped if there is only one inside a group
- `Improved` Checkboxes on blocks are now only checked when clicking on them, or the block type label
- `Fixed` Neo fields now work properly in live preview mode
- `Fixed` Fixed bug with Neo field block structures when localised
- `Fixed` Blocks now show when previewing older versions of entries (thanks @christianruhstaller)
- `Fixed` Fixed bug where elements could not be saved after reporting an error with a Neo field
- `Fixed` Fixed bug where you couldn't select text inside input fields in the configurator using keyboard shortcuts

#### v1.1.0
- `Added` Blocks now support structure property querying (children, descendants, etc)
- `Improved` Clicking on block tabs no longer toggles the checkbox
- `Improved` Now checks for compatible PHP version on install
- `Fixed` Fixed issue where child blocks weren't being added to the correct block
- `Fixed` Block tab dropdown (when in mobile view) now works on new blocks
- `Fixed` The "+" icon on block buttons is now correctly added to the first button

#### v1.0.2
- `Added` Added ability to get child blocks in the template. This implementation will be deprecated soon in a later release but will remain supported throughout all 1.x versions.

#### v1.0.1
- `Added` Added ability to query against block level in templates, like with categories and structure sections

#### v1.0.0
- `Added` Added support for the Quick Field plugin
- `Added` Added "Top Level" block type setting for hiding blocks from the main button row
- `Improved` Added support for Internet Explorer 10+
- `Improved` Blocks now force-expanded if they have errors
- `Improved` Expanding and collapsing a block is now animated
- `Improved` Delete confirmation box shows when deleting multiple blocks
- `Fixed` The "Add block above" feature now works correctly for child blocks
- `Fixed` Fixed issue with child block checkbox ordering
- `Fixed` Miscellaneous layout issues and minor bugs

--

#### v0.5.1
- `Improved` Block tabs now respond to mobile devices
- `Fixed` Fixed bug where reporting errors on new blocks were breaking many non-obvious things
- `Fixed` Fixed bug where blocks of different levels could be group-dragged together
- `Fixed` Fixed bug where child block checkboxes would be in the incorrect order if groups were present

#### v0.5.0
- `Added` Added support for the Relabel plugin

#### v0.4.0
- `Improved` Implemented transitions when adding/removing blocks
- `Improved` Group buttons now disable when all their child buttons are also disabled
- `Fixed` Fixed bug where child blocks weren't being appended correctly
- `Fixed` Fixed bug with button layout on child blocks when groups were involved

#### v0.3.0
- `Added` Added support for block hierarchies

#### v0.2.1
- `Added` Added support for eager loading
- `Fixed` Fix issue where some saved field values wouldn't load inside a Neo block

#### v0.2.0
- `Added` Added support for the Reasons plugin

#### v0.1.0
- Initial release
