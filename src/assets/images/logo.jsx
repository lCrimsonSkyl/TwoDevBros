/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({
    style = {},
    twoColorPrimary = '#054de9',
    twoColorSecondary = '#09c3f9',
    dColorPrimary = '#054de9',
    dColorSecondary = '#09c3f9',
    bColorPrimary = '#054de9',
    bColorSecondary = '#09c3f9',
    // dColorPrimary = '#b11113',
    // dColorSecondary = '#f15f5f',
    width = '100%',
    className = '',
    height = '100%',
    viewBox = "0 0 480 239.7",
}) => (
        <svg
            width={width}
            style={style}
            height={height}
            viewBox={viewBox}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <linearGradient id="b" x2=".544" y1=".5" y2="1.339" gradientTransform="scale(249.256 239.67)" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={twoColorPrimary} />
                <stop offset="77.214%" stopColor={twoColorSecondary} />
            </linearGradient>
            <path fill="url(#b)" className='Two' fillRule="evenodd" d="M132.277 101.619c-10.5-24.215-36.563-95.474-65.021-99.931 69-12.444 75.5 45.825 105 111.661s42.5 115.528 77 125.954c-48.073 2.817-52.761-11.088-64.011-24.709-11.25-13.622-42.468-88.759-52.968-112.975zm-67.256 0C54.521 77.404 28.458 6.145 0 1.688c69-12.444 75.5 45.825 105 111.661s42.5 115.528 77 125.954c-48.073 2.817-52.76-11.088-64.01-24.709-11.25-13.622-42.469-88.759-52.969-112.975z" />

            <linearGradient id="c" x2=".444" y1=".5" y2="1.396" gradientTransform="matrix(207.784 0 0 239.67 141.508 0)" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={dColorPrimary} />
                <stop offset="100%" stopColor={dColorSecondary} />
            </linearGradient>
            <path fill="url(#c)" className='D' d="M240.033 204.955c-1.122-.601-26.433-49.58-27-52q.08.006 30.549 29.817c10.258 10.035 25.368 18.522 33.723 18.94 16.068.805 29.112-17.168 29.112-40.109v-79.52c0-24.569-19.828-44.514-44.25-44.51q-48.943-2.304-86.5-2.125c-8.5-12.25-17.355-30.344-34.159-35.406 6.5-.089 57.216.343 133.743-.042l6.041.003c37.53.022 68 30.508 68 68.039v103.825c0 37.531-29.621 67.912-66.107 67.803l-.362-.015c-14.082.05-26.957-8.367-42.79-34.7z" />

            <linearGradient id="d" x1=".389" x2="1.107" y1=".063" y2="1.248" gradientTransform="matrix(149 0 0 239.67 330.033 0)" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={bColorPrimary} />
                <stop offset="100%" stopColor={bColorSecondary} />
            </linearGradient>
            <path fill="url(#d)" className='B' fillRule="evenodd" d="M330.033 239.67c16.208-5.696 24.833-20.653 34.159-35.637h27.92c45.108.305 61.421-6.99 46.809-37.411-1.44-2.998-4.169-7.634-6.09-10.346l-38.242-53.989c25.939 21.296 46.49 42.672 55.834 55.902 3.196 4.524 7.897 12.174 10.492 17.072l2.151 4.062c17.643 33.306 1.497 60.347-36.033 60.347h-97zm101-128.784c3.611-7.27 6.584-14.242 5.279-28.07 0-26.017-19.828-47.158-44.25-47.179q-7.446.508-27.87 0c-8.5-12.317-17.354-30.264-34.159-35.354q2.5-.566 75.112 0l6.042.003c37.53.021 67.931 30.675 67.846 68.411l-.058 25.642c-.006 2.775-.341 7.256-.748 10-1.737 11.73-9.009 30.893-16.194 38.722-7.251-7.373-18.044-20.377-31-32.175z" />

        </svg>
    );

Logo.propTypes = {
    color: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.string,
    className: PropTypes.string,
    height: PropTypes.string,
    viewBox: PropTypes.string
}

export default Logo;