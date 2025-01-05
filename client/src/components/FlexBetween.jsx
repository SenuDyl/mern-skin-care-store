import { Box } from "@mui/material";
import { styled } from "@mui/system"; //Used to customize the style of the component

const FlexBetween = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export default FlexBetween;