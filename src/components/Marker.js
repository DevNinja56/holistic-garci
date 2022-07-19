import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25px;
  height: 38px;
  user-select: none;
  transform: translate(-50%, -50%);
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI1Ny4xNDMiIHZpZXdCb3g9IjAgMCA0MCA1Ny4xNDMiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNlZmRmMDA7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIGlkPSJHcm91cF85MzEiIGRhdGEtbmFtZT0iR3JvdXAgOTMxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAzMSAtNDUwKSI+CiAgICA8cGF0aCBpZD0iaWNvbiIgY2xhc3M9ImNscy0xIiBkPSJNMjUsMkExOS45ODUsMTkuOTg1LDAsMCwwLDUsMjJDNSwzNywyNSw1OS4xNDMsMjUsNTkuMTQzUzQ1LDM3LDQ1LDIyQTE5Ljk4NSwxOS45ODUsMCwwLDAsMjUsMlptMCwyNy4xNDNBNy4xNDMsNy4xNDMsMCwxLDEsMzIuMTQzLDIyLDcuMTQ1LDcuMTQ1LDAsMCwxLDI1LDI5LjE0M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMjYgNDQ4KSIvPgogICAgPGcgaWQ9InllbGxvd19TIiBkYXRhLW5hbWU9InllbGxvdyBTIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjIgLTc5KSI+CiAgICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfMyIgZGF0YS1uYW1lPSJFbGxpcHNlIDMiIGNsYXNzPSJjbHMtMSIgY3g9IjIwIiBjeT0iMjAiIHI9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MDkgNTI5KSIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNTI5IiBkYXRhLW5hbWU9IlBhdGggMzUyOSIgZD0iTS40OTIsMjAuNTMyQTIyLjQ2NiwyMi40NjYsMCwwLDAsOS4zMjcsMjIuNGM1LjU1OSwwLDkuNjY1LTMuMjM1LDkuNjY1LTguMTcyLDAtMy44MTYtMi42NTUtNS41NTktNS44OTEtNi43MTlsLTMuMjc2LTEuMmMtMS41NzYtLjU4LTIuMTE2LTEuMzMzLTIuMTE2LTIuMzYzLDAtMS40NTIsMS0yLjE1OSwyLjU3Mi0yLjE1OWE3LjgyNSw3LjgyNSwwLDAsMSwzLjE1My43MDUsOC4zMTgsOC4zMTgsMCwwLDAsNC40MzcsMy44NTlsLjYyNC0uMzc1YTEwLjk1MSwxMC45NTEsMCwwLDEtLjQ1NS0zLjM2M1YxLjAzN0MxNS42NzcsMS4wMzcsMTIuOSwwLDkuNTM5LDAsNC44OTMsMCwuOTUzLDIuNTcxLjk1Myw3LjEzNWMwLDMuODE2LDIuNyw1Ljc2NCw1LjUxNiw2Ljc2bDMuNDg1LDEuMjg3YzEuNjE3LjU4LDIuMTU3LDEuNDA5LDIuMTU3LDIuNTMzLDAsMS43LTEuMDM3LDIuODYzLTMuMzE5LDIuODYzYTYuNjc5LDYuNjc5LDAsMCwxLTMuNjA4LTEuMTJBOS44NDcsOS44NDcsMCwwLDAsLjc0NywxNC43MjhMMCwxNS4xYTE1Ljc2NCwxNS43NjQsMCwwLDEsLjUsNC4xNDdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTkuNjY3IDUzOC4zMzMpIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K);
  background-size: 100% 100%;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
`

const Marker = ({ text, onClick }) => <Wrapper alt={text} onClick={onClick} />

Marker.defaultProps = {
  onClick: null,
}

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
}

export default Marker
