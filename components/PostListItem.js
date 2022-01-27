import React, { useContext } from "react"
import Image from "next/image"

import { ThemeContext } from "../helpers/themeContext"

export const PostListItem = ({ title, date, languaje }) => {

  return (
    <div className="StyledDiv">
      <Image
        src={`/images/icons/${languaje}.png`}
        alt="Logo"
        width={40}
        height={40}
        className="StyledImage"
      />
      <h3 className="StyledH3"> {title} </h3>
    </div>
  )
}
