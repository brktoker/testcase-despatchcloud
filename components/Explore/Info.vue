<template>
  <div class="flex justify-center px-8 xl:px-16 mt-8">
    <div class="flex justify-center flex-wrap">
      <div class="w-full">
        <h1 class="px-3 font-droit font-normal text-center text-xl">
          {{ $t("Country Clothing & Country Wear From Rydale") }}
        </h1>
        <div class="flex items-center justify-center">
          <div class="w-20 my-4 border-b-2 border-black"></div>
        </div>
        <div>
          <div
            class="transition duration-300"
            :class="{ 'max-h-[7rem] overflow-hidden': !expand }"
            :style="expand ? 'max-height: 1296px' : ''"
          >
            <p class="px-3 text-center" @click="expand = !expand">
              Explore our great range of British country clothing, footwear and
              country gifts along with rural style shirts and accessories. All
              inspired and designed in the heart of Yorkshire. Any countryside
              outing requires the right type of attire and outfit. At Rydale,
              our brand provides an array of great outdoor clothing, footwear,
              and accessories. All inspired and designed right in the heart of
              Yorkshire, here in the UK. We provide a range of fantastic indoor
              and country outdoor clothing options - from
              <a href="https://www.rydale.com/collections/mens-tweed-blazers"
                >quality country tweed jackets</a
              >, casual rural style wear, a wide collection of
              <a href="https://www.rydale.com/collections/mens-hats-caps"
                >flat caps</a
              >, British eventing equestrian outfits, traditional English clay
              and pheasant
              <a
                href="https://www.rydale.com/collections/mens-shooting-clothing"
                >shooting clothing</a
              >, fashion jodhpurs, farmers clothing,
              <a
                href="https://www.rydale.com/collections/ladies-country-boots-footwear"
                >country boots, </a
              >and much more. Go ahead and explore our apparel collections of
              men’s, women’s and children wear for inspired country clothing UK
              fashion in a range of different sizes including plus size. Let us
              know if you have any questions with regards to any of the clothing
              pieces and country fashion wears we will be more than happy to
              help. We offer a huge range of country clothing for men - whether
              you are looking for tweed jackets or waistcoats, smart checked
              shirts, leather boots or classic polo shirts, we have it all.
              Explore our extensive selection of menswear and find something
              that is perfect for a country gent. Our collection of ladies
              clothing offers everything from wax jackets and coats, patterned
              blouses and casual dresses to long and short leather boots, bags
              in all different styles and traditional knits. Make sure you check
              out our selection of womenswear for a completely stylish and
              functional country outfit. Not forgetting the kids, explore our
              wide range of children’s clothing and make your little one’s smile
              with a new pair of wellies, a cosy fleece or a raincoat for
              adventuring in the Great British outdoors. Here at Rydale, we have
              something for all the family, no matter what they enjoy doing. We
              even cater for all the popular outdoor country pursuits, with
              outdoor clothing specifically designed for shooting, farming,
              horse riding, walking and fishing. So, make sure you’re well
              equipped for whatever your next day out in the country brings and
              get kitted out with our Rydale branded clothing and accessories.
              Rydale is an excellent place to recreate that traditional British
              style. Our excellent customer service further compliments our
              high-quality clothing ranges. Our customer services team is able
              to advise on all aspects of the brand, whether that be fit, sizing
              or materials.&nbsp;
            </p>
          </div>
          <div class="relative h-1">
            <div
              class="smooth-area absolute bottom-0 left-0 w-full text-2xl flex justify-center"
              v-if="!expand"
            >
              <button type="button" @click="expand = true" aria-label="down">
                <span class="leading-none">
                  <span class="inline-flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="21"
                      height="24"
                    >
                      <path
                        d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const expand = ref(false);
</script>

<style lang="scss" scoped>
a {
  color: #12589b !important;
}
@media screen and (min-width: 991px) {
  .smooth-area {
    background: linear-gradient(0deg, #fff, #fff 60%, hsla(0, 0%, 100%, 0));
  }
}

.smooth-area {
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0) 0,
    hsla(0, 0%, 100%, 0.6) 60%,
    #fff
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00ffffff",endColorstr="#ffffff",GradientType=0);
}
</style>
