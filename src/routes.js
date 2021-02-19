import React, { lazy } from 'react'
import CallBack from './views/callback'

export default [
    {
        path: '/callback',
        // exact: true,
        component: CallBack,
        // routes: [
        //   {
        //     path: '/callback',
        //     exact: true,
        //     component: lazy(() => import('src/views/callback'))
        //   }
        // ]
      },
]