<template>
  <div class="relative border-t border-solid border-gray-300 mt-8 py-8">
    <button
      @click="scrollToTop"
      class="absolute right-0 top-0 mt-2 text-xs uppercase text-gray-400 mr-4"
    >
      <div class="pt-4">{{ $t("Return to top") }}</div>
      <div class="absolute top-0 left-0 w-full text-center text-2xs">
        <span class="leading-none"
          ><span class="inline-flex justify-center items-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="8.75"
              height="10"
            >
              <path
                fill="currentColor"
                d="M6.101 359.293L25.9 379.092c4.686 4.686 12.284 4.686 16.971 0L224 198.393l181.13 180.698c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 132.908c-4.686-4.686-12.284-4.686-16.971 0L6.101 342.322c-4.687 4.687-4.687 12.285 0 16.971z"
              ></path></svg></span
        ></span>
      </div>
    </button>
    <div
      class="container mx-auto flex flex-col lg:flex-row px-4 md:px-24 max-[491px]:max-w-[491px] w-full lg:!max-w-[1280px]"
    >
      <Links class="hidden lg:flex" />

      <SocialMedia />

      <FooterSubscribe />
    </div>
    <div
      class="container !max-w-[1280px] mx-auto flex flex-col lg:flex-row mt-0 lg:mt-6 px-0 md:px-24"
    >
      <div class="flex items-center flex-grow">
        <div
          class="mt-4 text-xs text-center mx-auto lg:mx-0 whitespace-nowrap tracking-wider"
        >
          Copyright Rydale Country Clothing | YTC Ltd 3768619
        </div>
        <div class="hidden lg:block w-full">
          <div class="flex justify-end items-center ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="277"
              height="28"
              viewBox="0 0 277 28"
              style="
                margin: 10px 0;
                float: right;
                width: 100%;
                max-width: 275px;
              "
            >
              <defs>
                <image
                  id="image"
                  width="38"
                  height="24"
                  alt="PayPal"
                  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAYCAYAAACWTY9zAAAAmklEQVRIie3XIRICMQyF4dcIBKD2DNyMO3BZTKeedYuoSJgHrcFFpSL/TEWrvolqCgCeC4AT4jMAHcCbkmut9a6qLwuOBlo4KE5rU9VnKWUb04uK04KZ7SJyE14GaonmgGQV0H8J85YwbwnzljBvCfOWMG8J85Ywb/L7zdq+CmhaCOuttcd4sMDzRdFC01zfzmN9i1xGZh3A8QG3AdONztW85AAAAABJRU5ErkJggg=="
                ></image>
              </defs>
              <g>
                <image
                  x="3"
                  y="3"
                  width="83"
                  height="22"
                  alt="Amazon Pay"
                  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAWCAYAAAC8J6DfAAAAVklEQVRYhe3QwQnAMAzAQKf77+zOUNAjlLsJhM7u7tzlfKi5qv25oOE3zAyZGTIzZGbIzJCZITNDZobMDJkZMjNkZsjMkJkhM0NmhswMmRkyM2RmZWZedGAFKGdAPwEAAAAASUVORK5CYII="
                ></image>
                <image
                  id="master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1"
                  x="96"
                  y="2"
                  width="38"
                  height="24"
                  alt="Master"
                  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAYCAYAAACWTY9zAAACE0lEQVRIic2XPUvDUBSG35vYD5MO2haUYsFBQfAXiC4OBQedO/sxOQmCQ3+Am+DkJDo7Ozi4OAj+AkFwKa0Wl1aHph+JN1dOtLWS3iQlYPNCh9xzOX3uOeeekzAA9NMBxDF+CQAmgBaRpMrl8q5t23UxZhEDsVCgKFpp27afGWPpCEQMQoiGoigLCj1EBQq/LEyJAMtQTYyy2a7W0D49h3l9C16uOmvqfB7xrQImD/ZAZ+WP5+DVW4jmt52l8lDzBajLe2B6LvB/OTUmhKj7bexcXsHYL0F0ukPt2mYXsVWAzySGO1ATiK0cQ10s+kMxlgkUMYJq7hxK7dpGG1qmATxR9U6Dz2ruTbwL6/7bRxA43xqj9FGkZFJzHFruvW+NPX+AdT6l+62HEoRRCw9GNSVLH0lfbwJcDJxEYOLFkDvkXacOQ4NRoXsppnXcTuvutT9sVW+fgcB6t08mZrrT5pVKUu/GhgIbl3zBqE95nj7uvtgi6X3Zqbf5yReMmqeXrFbSZbUz7rVBUcMNDeZ09KSkaQIw7lKAwgY8MnzO6R5UCWcKhAZT8jnoZ8dSO39V0X6b6j9bi1OeqaTuH2Q0BSr+5HYRqYsTaeSMGw2tehbWUnZ418fPSFo7CdT1McqsxD8OcZqVI4H9lwgs0n2MXvQbEWBx1GMhMLNSqRxFAY4YiIWYep9vdJXo822gIY1NJgDjC2dcUV8k7bWoAAAAAElFTkSuQmCC"
                ></image>
                <use
                  id="master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1_copy"
                  data-name="master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1 copy"
                  x="49"
                  y="2"
                  alt="Amazon Pay"
                  xlink:href="#image"
                ></use>
                <use
                  id="master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1_copy_2"
                  data-name="master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1 copy 2"
                  x="2"
                  y="2"
                  alt="PayPal"
                  xlink:href="#image"
                ></use>
                <image
                  id="visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00"
                  x="143"
                  y="2"
                  width="38"
                  height="24"
                  alt="Visa"
                  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAYCAYAAACWTY9zAAADBklEQVRIie2XbUhTURjH/xur1GU6nabTfJlmG2nOZqYwzazANKSELMG0MOpTEBF+qYi+hNWHLIsIsVIpTfCblSWJkEHgy3zJ5UvRMN1MmaDm23T3xnmmq8A0e3Mf/MPhPuc89577u//nXM69AgCsiQGsxvKLB2AGMM5I1ur1+myO40z8MosxMBZmFHPLjeO4boFA4GYHjoHn+SGhUBgsZB17gcI3FoHQDljm1QrYUvXXwXje2v4J2NX8OiSmlcBj0xVq5y+/tOVqX+tpLCz2Ntp0nykOibpBMI8qWrExKg+eCut1iph8fOobpusmJ2cQFJlH42cuVP0eWM4pDarKj6C8MI36lS+6bLkHpVo6Zh5SoaW9n+Kt4TJ0vB/E6XPPMDwyhYMpm3EsPQJyfwl8ZS50TkWlDiOjUxQ3thgWBRMtlNypCYSvbB16DSMwDY3DPG1BVU03VomEOHpYhdybdXTetggftOkGyDWWO5EVCVWo1w9zFZQ0YoOPC8JDvfC0ugtj42aInX6+2Sy6xjTb/ejY1GpESXkLLBYeKXsV8JCKoW0zWh3b4o0ETSC81ztjeoZDYloxzl58jomJacq/aehFe8cA0lPDEBfjD47j0fy2f8H7LgoWGxNAR2Z/8eMWio9nqGnN6DoHqK8K84bU3YnKvz9JSfBFZc24dK3W5hbTnvggKIKltvkW0oKl/N6xu0UN+DJmphJFqmSo1/YRQICfKyQuDjCbLZB5OaPgegrcJY4ofNgEXdcgDP2jeFLdSXOkZpWxLYdibavxz8DYzYIC3PBBP0T97Ay1deLZMkarfTFj4egtVatkcFgjQs2rj5TbvUOO+6VaegBWek+pmMZZWeu1f+gY0644OQZNY5C4OiI1WUljbM05OIigifaHwTgKZYgHucMU6O+KA8lKnMyMRHj8HRq7lZuEhFg5xXH77uFdt9VN9uDzib4ueJ43/Qrg/5JAIHBf2SuXqhWwpUpo/Zrlh+wFaI6FgZl7enpy7AGOMTAWxjT3++Y0+/vG4uWWGcDYVyMvp6GEcEBhAAAAAElFTkSuQmCC"
                ></image>
                <image
                  id="klarna-pay-later-136c625018d85c89117f23eaf4c8b8a169f9380806832699b5a26c71b8db424c"
                  x="237"
                  y="2"
                  width="38"
                  height="24"
                  alt="Klarna"
                  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAYCAYAAACWTY9zAAADjUlEQVRIidWX22scVRzHP3Pbnb3FbGgjsdfQW5quoSFi1LZgqlX60rdSAlLQ54D6L/gvGCg++WaLKOIFKkpQq6baiNE0oalJ8xCb2rRpmk32MrOzM6ecs7vZl8YdTCHrF5aZ5XznnM/8zjm/3xnt/tvvx4FhYBCw2Vo5wEVgyKxCvbnFQDXZNRa9Gqlm06DeBNP3ONl68zFVZDYyaHGb+Kk+NMsEIRCBqLfpWvVGQ/gBmqGrdk2TVgE1q1b1IXB+vI5/f2XzYHrCRjgl8l/9QvToPgWop+KIkqdgvJnb+IsP6/6nEkSO7FUwyld0EY5HaXIOs7MDY3vrkwGTnejpFNFMJ8lzJyl+N04k00nwIEukZx/+3WWyFz4n9cYpCpd/xT7+LNah3bjXbmDu3K76sA7spPB1Ur1k/svRhlBUd2Vj+QHC83CuThF97hDe9LyCkiovPsR+KUPu4++J9ner6LlXp1TU/HsrCkpKlP3KlJfKTw5MeGX85TVixzO4Y9PEBo6ut5XGZzDaWlRkhVvC++s29oke3PFZ7GOZeuT/eQBG+L0WyikjZO15msLI78RO9ICurw8W5B3Kf9+rQE7MYXS0VeBP9tafn7ujfGHWVk0N15gacHqe5LkB3D9vqYjoLQmCtYJa2LFX+shdGqkAzC4Qfb4Ld+wmzm83MdJJRMknyOYqvo++DQ0ma6UI4QNdw36hG/OZbWo3qvWSK+KMThLkivUOLQP7xSMY7Wm1rmQK8bN5lSbkVIdVqIgpBQJndKqhTXg+xSsTobvdSE2b+f+/JUlviZM6/zrZ4c+I9h7A3LGNwCkhVgs4125sHZhmmlj7d6h7mdW9WwuY7Wl801Alx+rapTZBsJJXFSLIFcDz0VIx9Nak2sVyV0a6O6vzo1G6Prd5sJqSZ1/GaG9l7cPLJM4cUzWz9d2zKkVYXbtxx2ew+w8jCi7uH7NE+w5SXlgiNtCrQCKH96iaKyvB0jvDDccLvcbKd5bQDAOsyrvIXCYz+dqlEQVSU/aDL1SBl9Oc/+QHjHQKa28HhW/GyH16Rbm0eFT9/k2hI+b8PIl1cBep868RLK/iL62izS/S9t5baFGrnko8v3KVua6q4k8TpAZfVccmqcTpfnWtgT5OMsEWN3OK1eSxqOCuD7qhT0ZaFXEPZOQVvL9hHPTqV8l/lsg7DaGk5EFAQdWANoaSuiincqj6p3k+32DoETN1iGILngjaAAAAAElFTkSuQmCC"
                ></image>
                <image
                  id="maestro-d2055c6b416c46cf134f393e1df6e0ba31722b623870f954afd392092207889c"
                  x="190"
                  y="2"
                  width="38"
                  height="24"
                  alt="Maestro"
                  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAYCAYAAACWTY9zAAACLklEQVRIic2Xz2vTYBjHv28ya2Y6u3XCQI0UJmNnL4IgCM5jDx7U86ZeBsKG4sE/wNtgIOxU5nVevMybP2AXYZeBIChMITRML3ZYt7guLHnlG9bukLxJSqXNFwp5+7xtPn2e5/0+jQDAlwmggMFLAvAA/CVJ0bbt+0EQNOSARQayMFHMVjkIgm0hRDkHGYOUclfTtMsaF3mBwgmL0HLAEquhbjYHzg8cLNfgrb+Fbzvhe3rFQqF6C8MLD7BTnsDyVxfrTgu264fxiqmjahlYmDZhmXrme4U9JqVspG1svXwFd/4ZZOswNl678wRr16v4NDocGzd0gZWrJcxOnkmHEmI8U8YItT/3WBmv3V7Er8oNzDh78KXA5zEj+h2+xNzH3+F1FrjUHmP5mCmVti9O4+fUTCd6c2cPJc9X7p/fbMJx1fHMYOwpVfmoteojnApkZz0kJa40DpT7mTn2Yc9gbPQkHZYuRaKTf9Q/hOLh6BmsffpUKvoiEkkqJWX/j1IOSqlg9Kkk7esyEm0Wkv2qksHPUsFonkkymtFSfz97OvEzNNyewejowlDf6O6bFzgSJ33G663xeJPFsdFyCvQMplnnYa48V8annC+Y+Pahs35/YSSxlHT/LKMpU/Mbs/dQXF1SZu7h6yWcszfwzhqJdX0cZ2r12mgm10c3sxJ9HOKclV2B9UsEy7WP8Y/+bg5YQrVZCObV6/WneYAjA1nI1H5841Hh41t08PVfHgD3H3PQWfYAtRTbAAAAAElFTkSuQmCC"
                ></image>
                <image
                  id="logo-pay-fullcolor_tools_small._V534867952_"
                  x="57"
                  y="7"
                  width="22"
                  height="14"
                  alt="Amazon Pay"
                  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAOCAYAAAArMezNAAACxElEQVQ4jV2UXUgUURTHf3d21tXVttQKTdCkApEIwbQvqEgzlCj7oKdeCsm3KAIheih6iV6iHqRvKARFgoqIICLSLCszUIQ+FItCs9U23V3b9WN2Jq6epcEDw9x77j3/c/5n/mdU6dZdiPmBeiAX2ANkyf4BsB64DSwGZoGDgAGclbUlGK3y3Df4bw5wCdgoAc/1BSBDAhuBCuAd0ANEgb3AIUE4IOsBvXFXrKv5JMA/xBeUZBdlXyWM7uhYoAlYClQDnYAJlCMLt81IC5LAg0J5nVT6QloWE38D8EqSaP/xJJa7FZpuJrBC9mnAJuAxcA+4AtQA5wVkGTACfAHagDeGcl7qDENRP0Yo7iPFY2ugaSAEXJXKdFVdQB/QDpwEmoHLkjhV3neBrabhfAhPexkcz6B2zRDm2uwJukezKAjE0i1bhSWwVMDOSfAxYEzYHBY2Y3LW6zVshif9HdFpk9NbPtKw4xNqotFLeVMVccvMzEmP/7EdVaag23YgNOUjPOUlLxDHb1okbIWDwlBOso01HuXcHfmb2mMqp6KltpMNRSEIg+dCnU1GIkFTz2oVSXiW/531tgdjqb9jlklpzjj7ioboG11C/3gA7ZucMQnFfHg8TsaiFOvh8KT/18+of/uj/R325pLf8zwsUM4tGkjhztOB3NHWj/lYtqKyMMjqJVE25oQwsh0+9wd4/XMZi30zBNJn6RnNpLmvgN5gNquyItyo7mJHUbCWCMU4FAIrlXONE3g4RYAWLM6QYHaug1ojcRGgHhEfYIuwDBj5kcazb7nsLBwhNz8Of/BjU4+a0/4R5Vyf+wCVc0OgyEHRhs0T4D3Qv0Dn86ZbrAXnRxGnjEm2YVAiSrkJ1CWBk6bHUus1z+XT4/tVVKB56GA9fcWasuueVpOWpMbYvRA4afqnc1RG1R3stgjwVsa7xXVQAHz/B91l67+ob6mDAAAAAElFTkSuQmCC"
                ></image>
                <image
                  id="pp-logo-100px"
                  x="7"
                  y="10"
                  width="29"
                  height="8"
                  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAICAYAAAAFiPQnAAABtElEQVQokY3STWjPcRwH8Nfvv6E9t0mtpVgeDiatbAdclnFBDaWQiFKMFAdHua25OBOOamWK2+T5wMiwm8jTymY0WXtiY9P338eNtc/l2+f7fX/6vB++mRVnKClah9NYjte4gFtmq+ERNtSzs5nvI4dNT+/FItzDebz7x/QmtOb8mEzNQWzHK7SgC7lZl1aUcb+HrkeUl6QlTTF/HNf+M3UIOwqVFqdmDcaxKxRuxmq0oxZ38Aa/0YADsiwzPXNT30CnLCsJdacwk3zAWnTgC3pDSBkGc2YSRiWKA5wWnkMnVsbZit0YwH7U59VktqmseC8zEQrH8BV38RTdeI4jWI/q1BeaP68Uy4JNRzBaGBkvxiecQH/Y1p9XPjlVpbJ8iYZVC/ycKsJVPIuzPeLZF7YeQ1+4djunIJfsKsBFtAWzjwF+gsdIxF7G3SVUGR1v01jXp7bmpNEk1NGweBAvAtsT/d9KYnoLVDcnRh9wHSPxOoQHkcHDUJhsLsTlfAzjE1s11rG05pexiW5ZlsjlswqynwOf3LsSVqePdiNTn8TNufbgLLb4NvxWSxMbGxlKX2GOhT+d335Zub8qLQAAAABJRU5ErkJggg=="
                ></image>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FooterSubscribe from "./FooterSubscribe.vue";
import Links from "./Links.vue";
import SocialMedia from "./SocialMedia.vue";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style lang="scss" scoped></style>
