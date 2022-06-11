import React from "react";
import { get, map, keys } from "lodash";
import { Avatar, Box } from "@material-ui/core";
import characterAssets from "../constants/CharacterAssets";

export default function GridDisplay() {
  return (
    <Box style={{ display: "flex" }}>
      {map(keys(characterAssets), (character) => {
        return (
          <Box key={character}>
            {map(keys(get(characterAssets, character)), (asset) => {
              return (
                <Avatar
                  key={asset}
                  style={{ color: "white", objectFit: "cover" }}
                  src={get(get(characterAssets, character), asset)}
                />
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
}
