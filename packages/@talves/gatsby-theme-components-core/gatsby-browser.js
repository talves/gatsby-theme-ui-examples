import React from 'react';
export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <script type="application/xhtml+xml" src="button-icons.svg" />,
  ]);
}
