/******************************************************************************
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 *****************************************************************************/

/******************************************************************************
 * Components
 *****************************************************************************/

import Disclosure from './components/disclosure'
import Dropdown from './components/dropdown'
import Sidenav from './components/sidenav'

/******************************************************************************
 * Initializes all Rivet components.
 *****************************************************************************/

function init () {
  Disclosure.initAll()
  Dropdown.initAll()
  Sidenav.initAll()
}

/******************************************************************************
 * Exports
 *****************************************************************************/

export {
  Disclosure,
  Dropdown,
  Sidenav,
  init
}
