import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Table } from "react-bootstrap"

import TableRow from "./components/TableRow"
import Td from "./components/Td"
import Th, { ThWithSort } from "./components/Th"

// TODO fully replace with customizable base_components/Table
const Tables = styled(({ children, className }) => (
  <Table className={`Tables ${className}`} responsive>
    {children}
  </Table>
))`
  ${({ isLayoutFixed }) =>
    isLayoutFixed &&
    `
    table-layout: fixed;
  `} .Tables__row {
    border-bottom: 1px solid #dadada;
    transition: background 300ms ease-in;

    &:hover {
      background: #f2f3f6;
    }

    th {
      border: 0;
      font-size: 12px;
      font-weight: 400;
      color: #636363;
      text-transform: uppercase;
      padding-bottom: 3px;
    }
  }
`
Tables.defaultProps = {
  isLayoutFixed: false
}
Tables.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
  isLayoutFixed: PropTypes.bool
}

export { Tables as default, TableRow, Th, Td, ThWithSort }
