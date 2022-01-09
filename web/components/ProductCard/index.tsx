import * as React from "react";

import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
} from "@mui/material";
import date from "date-and-time";

import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Props {
  title: string;
  image: string;
  averagePrice: number;
  updateDate: Date;
}

function ProductCard({ title, image, averagePrice, updateDate }: Props) {
  const datePattern = date.compile("DD MMM  YYYY");
  date;
  return (
    <Card sx={{ width: 345 }}>
      {/* TODO: Add drop-down menu and the ability to view price in another currency  */}
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={date.format(updateDate, datePattern)}
      />
      <CardMedia
        sx={{
          width: "auto",
          height: 194,
          margin: "0 auto",
        }}
        component="img"
        image={image}
        alt={title}
      />
      <CardActions disableSpacing>
        {/* TODO: Add i18 */}
        Средняя цена: ~{averagePrice} RUB
      </CardActions>
    </Card>
  );
}

export default React.memo(ProductCard);
