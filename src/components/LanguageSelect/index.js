import React, { useState, useRef, useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import { Popover, Box, MenuItem } from "components/muiComponents";
import NeonBorder from "components/neonBorder";
import { languages } from "utils";
import SettingsActions from "redux/actions/settings";

const { setLang } = SettingsActions;

const LangWithFlag = ({ lang, selected = false }) => (
  <Box display="flex" justifyContent={"center"} mr={1}>
    <NeonBorder selected={selected}>
      <img
        src={`/images/${lang}.png`}
        alt="us"
        style={{ borderRadius: "50%" }}
        width={"35px"}
        height={"35px"}
      />
    </NeonBorder>
  </Box>
);

export default function DateRange(props) {
  const { appLang } = useSelector((state) => state.settings);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);
  const outSideClickRef = useRef(null);

  const handleLanguageChange = useCallback(
    (lang) => () => {
      window.dispatch(setLang({ lang }));
    },
    []
  );

  return (
    <Box
      onClick={(e) => setAnchorEl(open ? null : e.currentTarget)}
      display="flex"
      flexDirection="column"
      p={2}
    >
      <LangWithFlag lang={appLang} />
      <Box ref={outSideClickRef}></Box>
      <Box>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          sx={{
            "& .MuiPaper-root": {
              borderRadius: "1.3rem",
            },
          }}
        >
          <Box display="flex" flexDirection="column">
            <NeonBorder>
              {languages.map((lang) => (
                <Box onClick={handleLanguageChange(lang.code)} p={1}>
                  <LangWithFlag
                    lang={lang.code}
                    selected={lang.code === appLang}
                  />
                </Box>
              ))}
            </NeonBorder>
          </Box>
        </Popover>
      </Box>
    </Box>
  );
}
