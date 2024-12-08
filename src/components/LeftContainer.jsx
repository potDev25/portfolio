import React from "react";
import Links from "./Links";
import Titles from "./Titles";
import SocialMediaLinks from "./SocialMediaLinks";
import One from '../assets/images/1.png'
import Two from '../assets/images/2.png'
import Three from '../assets/images/3.png'
import Four from '../assets/images/4.png'
import Five from '../assets/images/5.png'
import Six from '../assets/images/6.png'
import Seven from '../assets/images/7.png'
import Eigth from '../assets/images/8.png'
import Nine from '../assets/images/9.png'
import Ten from '../assets/images/10.png'
import Eleven from '../assets/images/11.png'
import Twelve from '../assets/images/12.png'
import Thirteen from '../assets/images/13.png'
import Fourten from '../assets/images/14.png'
import Fifth from '../assets/images/15.png'

export default function LeftContainer({ activeId }) {
  return (
    <div className="xl:h-[100vh] lg:h-[100vh] pt-20 px-4 lg:px-10 xl:px-36">
      <div className="mx-auto max-w-screen-xl w-full">
        <Titles />
        <Links activeId={activeId} />
        <SocialMediaLinks />
        <div className="flex items-center flex-wrap gap-2 mt-5" id="photos">
          <img src={One} alt="" />
          <img src={Two} alt="" />
          <img src={Three} alt="" />
          <img src={Four} alt="" />
          <img src={Five} alt="" />
          <img src={Six} alt="" />
        </div>
        <div className="flex items-center flex-wrap gap-2 mt-5" id="photos">
          <img src={Seven} alt="" />
          <img src={Eigth} alt="" />
          <img src={Nine} alt="" />
          <img src={Ten} alt="" />
          <img src={Eleven} alt="" />
        </div>
      </div>
    </div>
  );
}

