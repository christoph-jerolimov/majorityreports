// import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { plugin } from '../src/plugin';

createDevApp()
  .registerPlugin(plugin)
  // .addPage({
  //   element: <MajorityreportsCorePage />,
  //   title: 'Root Page',
  //   path: '/majorityreports-core',
  // })
  .render();
