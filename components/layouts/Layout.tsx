import React, { FC } from 'react'
import { Box } from '@mui/material'
import Head from 'next/head';
import { Navbar, Sidebar } from '../ui';

interface Props {
  title?: string;
}

export const Layout: FC<Props> = ({ title = 'KanbanBoard', children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      <Sidebar />

      <Box sx={{ padding: '10px 20px' }}>
        {children}
      </Box>
    </Box>
  )
}

