/******************************************************************************
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 *****************************************************************************/

import Component from './component'
import keyCodes from '../utilities/keyCodes'

/******************************************************************************
 * The disclosure component allows the user to show or hide additional content
 * about a topic.
 *
 * @see https://v2.rivet.iu.edu/docs/components/disclosure/
 *****************************************************************************/

export default class Disclosure extends Component {

  /****************************************************************************
   * Gets the disclosure's CSS selector.
   *
   * @static
   * @returns {string} The CSS selector
   ***************************************************************************/

  static get selector () {
    return '[data-rvt-disclosure]'
  }

  /****************************************************************************
   * Gets an object containing the methods that should be attached to the
   * component's root DOM element. Used by wicked-elements to initialize a DOM
   * element with Web Component-like behavior.
   *
   * @static
   * @returns {Object} Object with component methods
   ***************************************************************************/

  static get methods () {
    return {

      /************************************************************************
       * Initializes the disclosure.
       ***********************************************************************/

      init () {
        this._initSelectors()
        this._initElements()
        this._initProperties()
        this._removeIconFromTabOrder()

        Component.bindMethodToDOMElement(this, 'open', this.open)
        Component.bindMethodToDOMElement(this, 'close', this.close)
      },

      /************************************************************************
       * Initializes disclosure child element selectors.
       *
       * @private
       ***********************************************************************/

      _initSelectors () {
        this.toggleAttribute = 'data-rvt-disclosure-toggle'
        this.targetAttribute = 'data-rvt-disclosure-target'

        this.toggleSelector = `[${this.toggleAttribute}]`
        this.targetSelector = `[${this.targetAttribute}]`
      },

      /************************************************************************
       * Initializes disclosure child elements.
       *
       * @private
       ***********************************************************************/

      _initElements () {
        this.toggleElement = this.element.querySelector(this.toggleSelector)
        this.targetElement = this.element.querySelector(this.targetSelector)
      },

      /************************************************************************
       * Initializes disclosure state properties.
       *
       * @private
       ***********************************************************************/

      _initProperties () {
        this.isOpen = false
      },

      /************************************************************************
       * Removes the arrow icon from the tab order.
       *
       * @private
       ***********************************************************************/

      _removeIconFromTabOrder () {
        const icon = this.element.querySelector('svg')

        if (icon) { icon.setAttribute('focusable', 'false') }
      },

      /************************************************************************
       * Called when the disclosure is added to the DOM.
       ***********************************************************************/

      connected () {
        Component.dispatchComponentAddedEvent(this.element)
      },

      /************************************************************************
       * Called when the disclosure is removed from the DOM.
       ***********************************************************************/

      disconnected () {
        Component.dispatchComponentRemovedEvent(this.element)
      },

      /************************************************************************
       * Opens the disclosure.
       ***********************************************************************/

      open () {
        if (this._isDisabled()) { return }

        if (!this._eventDispatched('disclosureOpened')) { return }

        this._setOpenState()
      },

      /************************************************************************
       * Returns true if the disclosure toggle is disabled.
       *
       * @private
       * @returns {boolean} Disabled state
       ***********************************************************************/

      _isDisabled () {
        return this.toggleElement.hasAttribute('disabled')
      },

      /************************************************************************
       * Sets the disclosure's state properties to represent it being open.
       *
       * @private
       ***********************************************************************/

      _setOpenState () {
        this.toggleElement.setAttribute('aria-expanded', 'true')
        this.targetElement.removeAttribute('hidden')

        this.isOpen = true
      },

      /************************************************************************
       * Closes the disclosure.
       ***********************************************************************/

      close () {
        if (!this._isOpen()) { return }

        if (!this._eventDispatched('disclosureClosed')) { return }

        this._setClosedState()
      },

      /************************************************************************
       * Returns true if the disclosure is open.
       *
       * @private
       * @returns {boolean} Disclosure open state
       ***********************************************************************/

      _isOpen () {
        return this.isOpen
      },

      /************************************************************************
       * Sets the disclosure's state properties to represent it being closed.
       *
       * @private
       ***********************************************************************/

      _setClosedState () {
        this.toggleElement.setAttribute('aria-expanded', 'false')
        this.targetElement.setAttribute('hidden', '')

        this.isOpen = false
      },

      /************************************************************************
       * Returns true if the custom event with the given name was successfully
       * dispatched.
       *
       * @private
       * @param {string} name - Event name
       * @returns {boolean} Event successfully dispatched
       ***********************************************************************/

      _eventDispatched (name) {
        const dispatched = Component.dispatchCustomEvent(name, this.element)

        return dispatched
      },

      /************************************************************************
       * Handles click events broadcast to the disclosure.
       *
       * @param {Event} event - Click event
       ***********************************************************************/

      onClick (event) {
        if (this._clickOriginatedInsideDisclosureTarget(event)) { return }

        this._isOpen()
          ? this.close()
          : this.open()
      },

      /************************************************************************
       * Returns true if the given click event originated inside the
       * disclosure's content area.
       *
       * @private
       * @param {Event} event - Click event
       * @returns {boolean} Click originated inside content area
       ***********************************************************************/

      _clickOriginatedInsideDisclosureTarget (event) {
        return this.targetElement.contains(event.target)
      },

      /************************************************************************
       * Handles keydown events broadcast to the disclosure.
       *
       * @param {Event} event - Keydown event
       ***********************************************************************/

      onKeydown (event) {
        if (event.keyCode === keyCodes.escape) {
          this.close()
          this.toggleElement.focus()
        }
      }
    }
  }
}
