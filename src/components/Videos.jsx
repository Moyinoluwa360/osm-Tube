import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="space-around"
      alignItems="start"
      gap={1}
    >
      {videos.map((item, idx) => {
        if (item.id.videoId || item.id.channelId) {
          return (
            <Box key={idx} sx={{ width: { xs: '100%', sm: 'auto' } }}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          );
        }
        return null;
      })}
    </Stack>
  );
};

export default Videos;
