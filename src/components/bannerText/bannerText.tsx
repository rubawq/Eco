/** @jsxImportSource @emotion/react */

import { bannerTextStyles } from "./bannerTextStyle";


const BannerText = () => {
  return (
    <div css={bannerTextStyles.container}>
      <h1 css={bannerTextStyles.heading}>the autumn equinox</h1>
      <p css={bannerTextStyles.paragraph}>
        Fall has arrived.<br/> Shop for our new releases starting today.
      </p>
      <button css={bannerTextStyles.button}>SHOP NOW</button>
    </div>
  );
};

export default BannerText;
