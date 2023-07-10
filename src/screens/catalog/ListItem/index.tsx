import { observer } from 'mobx-react-lite'
import React from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

import './styles.module.css'
import {Product} from "~/api/catalog/products";

interface Props {
    item: Product
}

const ListItem = observer(({ item }: Props) => {
  return (

  )
})

export default ListItem
