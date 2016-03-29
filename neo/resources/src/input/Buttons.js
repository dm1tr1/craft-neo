import $ from 'jquery'
import '../jquery-extensions'

import Garnish from 'garnish'
import Craft from 'craft'

import renderTemplate from './templates/buttons.twig'
import '../twig-extensions'

const _defaults = {
	blockTypes: [],
	maxBlocks: 0,
	blocks: null
}

export default Garnish.Base.extend({

	_blockTypes: [],
	_maxBlocks: 0,

	init(settings = {})
	{
		settings = Object.assign({}, _defaults, settings)

		this._blockTypes = Array.from(settings.blockTypes)
		this._maxBlocks = settings.maxBlocks

		this.$container = $(renderTemplate({
			blockTypes: this._blockTypes,
			maxBlocks: this._maxBlocks
		}))

		const $neo = this.$container.find('[data-neo-bn]')
		this.$buttonsContainer = $neo.filter('[data-neo-bn="container.buttons"]')
		this.$menuContainer = $neo.filter('[data-neo-bn="container.menu"]')
		this.$blockButtons = $neo.filter('[data-neo-bn="button.addBlock"]')

		if(settings.blocks)
		{
			this.updateButtonStates(settings.blocks)
		}

		this.addListener(this.$blockButtons, 'activate', '@newBlock')
		this.addListener(this.$container, 'resize', () => this.updateResponsiveness());
	},

	initUi()
	{
		Craft.initUiElements(this.$container)
		this.updateResponsiveness()
	},

	updateButtonStates(blocks = [])
	{
		const that = this
		const allDisabled = (this._maxBlocks > 0 && blocks.length >= this._maxBlocks)

		this.$blockButtons.each(function()
		{
			const $button = $(this)
			let disabled = allDisabled

			if(!disabled)
			{
				const blockType = that.getBlockTypeByButton($button)
				const blocksOfType = blocks.filter(b => b.getBlockType().getHandle() === blockType.getHandle())
				const maxBlockTypes = blockType.getMaxBlocks()

				disabled = (maxBlockTypes > 0 && blocksOfType.length >= maxBlockTypes)
			}

			$button.toggleClass('disabled', disabled)
		})
	},

	updateResponsiveness()
	{
		if(!this._buttonsContainerWidth)
		{
			this._buttonsContainerWidth = this.$buttonsContainer.width()
		}

		const isMobile = (this.$container.width() < this._buttonsContainerWidth)

		this.$buttonsContainer.toggleClass('hidden', isMobile)
		this.$menuContainer.toggleClass('hidden', !isMobile)
	},

	getBlockTypeByButton($button)
	{
		const btHandle = $button.attr('data-neo-bn-info')

		return this._blockTypes.find(bt => bt.getHandle() === btHandle)
	},

	'@newBlock'(e)
	{
		const $button = $(e.currentTarget)
		const blockTypeHandle = $button.attr('data-neo-bn-info')
		const blockType = this._blockTypes.find(bt => bt.getHandle() === blockTypeHandle)

		this.trigger('newBlock', {
			blockType: blockType
		})
	}
})