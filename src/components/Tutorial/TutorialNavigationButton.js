import React from 'react'
import classNames from 'classnames'

const TutorialNavigationButton = ({ classes, clickHandler, value, disabled = false }) => (
  <a className={classNames('tutorial-button button button-variable-width', classes)} disabled={disabled} onClick={clickHandler}>{value}</a>
)

export default TutorialNavigationButton
