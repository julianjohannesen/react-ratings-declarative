import React from 'react';
// https://codepen.io/miukimiu/pen/Igouf?editors=1010

export default ({ widgetDimension, widgetRatedColor, isPartiallyFullWidget, gradientPathName, fillId}) => {
  return (
    <div id="cat" style={{
      height: widgetDimension,
      width: widgetDimension
    }}>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                  viewBox="0 0 400 500" enableBackground="new 0 0 400 500">
                <g id="cauda" width="72" height="79">
        <path id="cauda_in" fill={widgetRatedColor} d="M164.7,376.7l6.2,9.9c0,0-15.1,13-33.7,16.8c-13.4,2.8-61.1,6.4-61.1-41.8
          s33.6-56.2,18.4-15.5c0,0-5.5,17.1,1.6,28.6s27.4,21.7,45.8,12.2L164.7,376.7z" width="72" height="79"/>
                </g>
      <g>
        <g>
          <path fill={widgetRatedColor} d="M242.2,95L242.2,95l-0.1-0.1C242.1,94.9,242.1,95,242.2,95z" />
          <path fill={widgetRatedColor} d="M111.9,78.4L111.9,78.4C128.4,67.2,140,37.8,140,37.8l10.4,9.1c0,0-3-34.6,5.2-26.4s30.7,26,30.7,26
            s-4.1-21.9,0-17.8c4,4,20.8,38.6,53.5,64.5c-18.5-14.5-42.9-28.1-74-41.4C144.8,60.8,127,69.5,111.9,78.4z"/>
                    <g>
            <path fill={widgetRatedColor} d="M242,94.9c-0.8-0.6-1.5-1.2-2.2-1.7C240.5,93.7,241.3,94.3,242,94.9z" />
            <path fill={widgetRatedColor} d="M243.1,95.8c0.5-0.6,0.4-1.5-0.2-2l0,0c-0.7-0.6-1.5-1.2-2.2-1.8l0,0c0,0,0,0-0.1,0l0,0l0,0l0,0l0,0l0,0
              l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c-0.4-0.2-0.8-0.2-1.1-0.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0
                        l0,0l0,0l0,0c0,0,0,0-0.1,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0,0,0,0,0,0.1l0,0
                        c-0.2,0.3-0.3,0.6-0.3,1l0,0l0,0l0,0c0,0.4,0.2,0.7,0.5,0.9l0,0c0.1,0.1,0.2,0.2,0.3,0.3l0,0c0.6,0.5,1.3,1,1.9,1.5l0,0l0.9-1.1
                        l-0.9,1.1c0.3,0.2,0.6,0.3,0.9,0.3l0,0C242.5,96.3,242.9,96.1,243.1,95.8L243.1,95.8z"/>
                    </g>
        </g>
      </g>
      <g>
        <g>
          <path fill={widgetRatedColor} d="M158.8,95.7L158.8,95.7l0.1-0.1C158.8,95.7,158.8,95.7,158.8,95.7z" />
          <path fill={widgetRatedColor} d="M289,79.2L289,79.2c-16.4-11.3-28.1-40.7-28.1-40.7l-10.4,9.1c0,0,3-34.6-5.2-26.4s-30.7,26-30.7,26
            s4.1-21.9,0-17.8c-4,4-20.8,38.6-53.5,64.5c18.5-14.5,42.9-28.1,74-41.4C256.1,61.5,274,70.2,289,79.2z"/>
                    <g>
            <path fill={widgetRatedColor} d="M158.9,95.6c0.8-0.6,1.5-1.2,2.2-1.7C160.4,94.5,159.6,95.1,158.9,95.6z" />
            <path fill={widgetRatedColor} d="M157.8,96.5c-0.5-0.6-0.4-1.5,0.2-2l0,0c0.7-0.6,1.5-1.2,2.2-1.8l0,0c0,0,0,0,0.1,0l0,0l0,0l0,0l0,0l0,0
              l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0.4-0.2,0.8-0.2,1.1-0.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0
                        l0,0l0,0c0,0,0,0,0.1,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0,0,0,0,0,0.1l0,0
                        c0.2,0.3,0.3,0.6,0.3,1l0,0l0,0l0,0c0,0.4-0.2,0.7-0.5,0.9l0,0c-0.1,0.1-0.2,0.2-0.3,0.3l0,0c-0.6,0.5-1.3,1-1.9,1.5l0,0
                        l-0.9-1.1l0.9,1.1c-0.3,0.2-0.6,0.3-0.9,0.3l0,0C158.5,97,158.1,96.9,157.8,96.5L157.8,96.5z"/>
                    </g>
        </g>
      </g>
      <path fill="#232323" d="M241.2,276.8c0,0,54.5,100.7,3.9,105.1" />
      <path fill={widgetRatedColor} d="M158.7,276.8c0,0-54.5,100.7-3.9,105.1" />
      <path fill={widgetRatedColor} d="M199.4,276.8H241c0,0,43.8,128.4-12,127.7h-29.6" />
      <path fill={widgetRatedColor} d="M200.1,276.8h-41.3c0,0-43.8,128.4,12,127.7h29.4" />
      <path fill={widgetRatedColor} d="M265.1,65.2c0,0,43-15.3,48.9-13.1c5.8,2.2,13.9,25.5,0,48.2" />
      <path fill="#232323" d="M287.7,69.5c0,0,36.5-17.5,25.5,17.5" />
      <path fill={widgetRatedColor} d="M199.3,278.6c5.2-0.7,161.4,11.2,151.9-109S199.3,47,199.3,47" />
      <path fill={widgetRatedColor} d="M134.8,64.4c0,0-43-15.3-48.9-13.1c-5.8,2.2-13.9,25.5,0,48.2" />
      <path fill={widgetRatedColor} d="M114.4,68.8c0,0-36.5-17.5-25.5,17.5" />
      <path fill={widgetRatedColor} d="M199.9,278.6c-5.2-0.7-161.4,11.2-151.9-109S199.9,47,199.9,47" />
      <g>
        <g>
          <g>
            <defs>
              <path id="SVGID_1_" d="M245.2,228.4c0.4,15.3-18.4,22.6-46.5,22.6s-42.3-7.9-43.6-23.1c-1.8-21,15.3-18.7,43.4-18.7
                C226.5,209.2,244.6,207.4,245.2,228.4z"/>
                      </defs>
            <clipPath id="SVGID_2_">
              <use overflow="visible"/>
                      </clipPath>
            <path clipPath="url(#SVGID_2_)" fill="#1E1E1E" d="M245.2,228.4c0.4,15.3-18.4,22.6-46.5,22.6s-42.3-7.9-43.6-23.1
              c-1.8-21,15.3-18.7,43.4-18.7C226.5,209.2,244.6,207.4,245.2,228.4z"/>
                    </g>
        </g>
        <g>
          <g>
            <defs>
              <path id="SVGID_3_" d="M245.2,228.4c0.4,15.3-18.4,22.6-46.5,22.6s-42.3-7.9-43.6-23.1c-1.8-21,15.3-18.7,43.4-18.7
                C226.5,209.2,244.6,207.4,245.2,228.4z"/>
                      </defs>
            <clipPath id="SVGID_4_">
              <use  href="#SVGID_3_"  overflow="visible"/>
                      </clipPath>
            <path clipPath="url(#SVGID_4_)" fill="#F05B61" d="M159.4,250.1c-0.3-13.3,16-19.6,40.3-19.6s36.6,6.8,37.8,20
              c1.6,18.2-13.2,16.2-37.6,16.2C175.6,266.7,159.9,268.3,159.4,250.1z"/>
                    </g>
        </g>
      </g>
      <path fill={widgetRatedColor} d="M209.4,398c-2.5,6.3-4.6,12.7-4.9,19.5c-0.5,9.5,2,18.9,5.2,27.7c1.7,4.6,12.8,1.7,11.2-2.8
        c-2.9-8.1-5.3-16.6-5.1-25.2c0.2-6.3,2-12.3,4.4-18.1c2.2-5.5-8.1-5.3-9.8-1.1H209.4z"/>
                <path fill={widgetRatedColor} d="M194.2,396.7c-2.9,15.4-8.3,33-0.3,47.8c1.3,2.4-3.7,2.9-4.9,3.1c-2.8,0.3-6.2-0.9-7.7-3.5
        c-8.5-15.7,0.2-35.5,3.4-52C185.1,389.9,194.8,393.4,194.2,396.7z"/>
                <path fill="#1E1E1E" d="M212.1,167.6c-2.7-5.2-22.5-5.5-24.6,0c-1.3,3.6,7.6,11,12.1,10.8C204.2,178.1,213.7,170.7,212.1,167.6z" />
      <path fill="#1E1E1E" d="M230.5,136.4c3.4-6,6.5-9.9,9.2-12.1l0,0c2.7-2.3,4.9-2.9,6.8-2.9l0,0c3,0,5.9,2,8.3,4.7l0,0
        c2.4,2.7,4.1,5.8,4.6,7l0,0c0.2,0.3,0.2,0.5,0.2,0.5l0,0l0,0c0.6,1.4,2.3,2.1,3.8,1.5l0,0c1.4-0.6,2.1-2.3,1.5-3.8l0,0
                  c-0.1-0.2-3.5-8.3-10.3-13l0,0c-2.3-1.5-5-2.7-8.2-2.7l0,0c-3.4,0-7,1.4-10.4,4.2l0,0c-3.5,2.9-7,7.3-10.5,13.8l0,0
                  c-0.8,1.4-0.3,3.1,1.1,3.9l0,0c0.4,0.2,0.9,0.4,1.4,0.4l0,0C229,137.9,230,137.3,230.5,136.4L230.5,136.4z"/>
                <path fill="#1E1E1E" d="M140.3,136.4c3.4-6,6.5-9.9,9.2-12.1l0,0c2.7-2.3,4.9-2.9,6.8-2.9l0,0c3,0,5.9,2,8.3,4.7l0,0
        c2.4,2.7,4.1,5.8,4.6,7l0,0c0.2,0.3,0.2,0.5,0.2,0.5l0,0l0,0c0.6,1.4,2.3,2.1,3.8,1.5l0,0c1.4-0.6,2.1-2.3,1.5-3.8l0,0
                  c-0.1-0.2-3.5-8.3-10.3-13l0,0c-2.3-1.5-5-2.7-8.2-2.7l0,0c-3.4,0-7,1.4-10.4,4.2l0,0c-3.5,2.9-7,7.3-10.5,13.8l0,0
                  c-0.8,1.4-0.3,3.1,1.1,3.9l0,0c0.4,0.2,0.9,0.4,1.4,0.4l0,0C138.7,137.9,139.7,137.3,140.3,136.4L140.3,136.4z"/>
                <path fill={widgetRatedColor} d="M176.8,290.6c0,0,9.5,4.4,23.3,5.1v94.9C200.1,390.6,143.9,397.1,176.8,290.6z" />
      <path fill="#232323" d="M223.5,290.6c0,0-9.5,4.4-23.3,5.1v94.9C200.1,390.6,256.3,397.1,223.5,290.6z" />
      <g>
        <g>
          <path fill={widgetRatedColor} d="M94.8,97.2L94.8,97.2L94.8,97.2C94.7,97.3,94.7,97.2,94.8,97.2z" />
          <path fill={widgetRatedColor} d="M78.2,227.4L78.2,227.4C67,211,37.5,199.3,37.5,199.3l9.1-10.4c0,0-33.9-45.1-25.7-53.3
            c8.2-8.2,25.2,17.4,25.2,17.4s-21.1-44-17-48.2c4-4,37.9,27.3,63.8-5.3c-14.5,18.5-28.1,42.9-41.4,74
                      C60.5,194.5,69.3,212.4,78.2,227.4z"/>
                    <g>
            <path fill={widgetRatedColor} d="M94.7,97.3c-0.6,0.8-1.2,1.5-1.7,2.2C93.5,98.8,94.1,98,94.7,97.3z" />
            <path fill={widgetRatedColor} d="M95.5,96.2c-0.6-0.5-1.5-0.4-2,0.2l0,0c-0.6,0.7-1.2,1.5-1.8,2.2l0,0c0,0,0,0,0,0.1l0,0l0,0l0,0l0,0l0,0
              l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c-0.2,0.4-0.2,0.8-0.1,1.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0
                        l0,0l0,0l0,0c0,0,0,0,0,0.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0,0,0,0,0.1,0l0,0
                        c0.3,0.2,0.6,0.3,1,0.3l0,0l0,0l0,0c0.4,0,0.7-0.2,0.9-0.5l0,0c0.1-0.1,0.2-0.2,0.3-0.3l0,0c0.5-0.6,1-1.3,1.5-1.9l0,0l-1.1-0.9
                        l1.1,0.9c0.2-0.3,0.3-0.6,0.3-0.9l0,0C96.1,96.9,95.9,96.5,95.5,96.2L95.5,96.2z"/>
                    </g>
        </g>
      </g>
      <g>
        <g>
          <path fill={widgetRatedColor} d="M302.8,99.1L302.8,99.1l0.1,0.1C302.8,99.1,302.8,99.1,302.8,99.1z" />
          <path fill={widgetRatedColor} d="M319.3,229.3L319.3,229.3c11.3-16.4,40.7-28.1,40.7-28.1l-9.1-10.4c0,0,34.6,3,26.4-5.2s-26-30.7-26-30.7
            s21.9,4.1,17.8,0c-4-4-38.6-20.8-64.5-53.5c14.5,18.5,28.1,42.9,41.4,74C337,196.4,328.3,214.3,319.3,229.3z"/>
                    <g>
            <path fill={widgetRatedColor} d="M302.9,99.2c0.6,0.8,1.2,1.5,1.7,2.2C304,100.7,303.5,99.9,302.9,99.2z" />
            <path fill={widgetRatedColor} d="M302,98.1c0.6-0.5,1.5-0.4,2,0.2l0,0c0.6,0.7,1.2,1.5,1.8,2.2l0,0c0,0,0,0,0,0.1l0,0l0,0l0,0l0,0l0,0l0,0
              l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0.2,0.4,0.2,0.8,0.1,1.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0
                        l0,0c0,0,0,0,0,0.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0,0,0,0-0.1,0l0,0
                        c-0.3,0.2-0.6,0.3-1,0.3l0,0l0,0l0,0c-0.4,0-0.7-0.2-0.9-0.5l0,0c-0.1-0.1-0.2-0.2-0.3-0.3l0,0c-0.5-0.6-1-1.3-1.5-1.9l0,0
                        l1.1-0.9l-1.1,0.9c-0.2-0.3-0.3-0.6-0.3-0.9l0,0C301.5,98.8,301.6,98.4,302,98.1L302,98.1z"/>
                    </g>
        </g>
      </g>
                </svg>
              </div >
  );
}