import React from "react";
import Link from "next/link";
import styles from "../../components/styles/Background.module.css";
export default function Products() {
  const data = `<div class="sr-element sr-products" data-embed="multiple_products"><script type="application/json">{"publishable_key":"sr_live_pk_092ad49cf2bfca49991c2bf97756542948b4","options":{"products_to_display":"all","categories":[],"product_size":"medium","image_dimension_value":"crop","image_aspect_ratio":"portrait","button_style":"standard","variation_style":"on_hover","open_product_in":"popup","button_position":"inline","product_default_sorting_order":"product_order","product_pagination_limit":"12","hide_out_of_stock":"0"},"includes":{"show_search_box":"1","show_sort_by":"1","show_per_page":"1","show_category_dropdown":"1","show_currency_dropdown":"1","show_language_dropdown":"1","show_product_filters":"1","show_product_name":"1","show_product_price":"1","show_product_image":"1","show_product_summary":"1","open_modal_on_image_click":"1","show_view_product_button":"1","show_add_to_cart_button":"1","show_min_max_order_quantity":"1","show_sale":"1","show_free_shipping":"1","show_new_product":"1","show_digital_download":"1","show_pwyw":"1","image_swap":"1","show_button_icons":"1"},"product_popup":{"show_product_name":"1","show_product_price":"1","show_product_summary":"1","show_product_description":"1","show_product_image":"1","show_select_quantity":"1","show_image_thumbnails":"1","show_product_reviews":"1","show_product_sku":"1","show_product_categories":"1","show_social_sharing_icons":"1","show_related_products":"1","thumbnail_layout":"horizontal_below","image_dimension_value":"crop","image_aspect_ratio":"portrait","variation_styling":"dropdown","show_min_max_order_quantity":"1","show_sale":"1","show_free_shipping":"1","show_new_product":"1","show_digital_download":"1","show_pwyw":"1","show_product_tabs":"1","image_zoom":"1","lightbox_gallery":"1","show_stock":"0"},"styles":{"align_content":"center","product_title":"#314d5d","product_price":"#2d2d2d","product_summary":"#777777","button_background":"#233642","button_color":"#ffffff","view_product_button_background":"#233642","view_product_button_color":"#ffffff","view_cart_button_background":"#233642","view_cart_button_color":"#ffffff","product_background":"#ffffff","modal_background":"#ffffff","button_font_weight":"normal","popup":{"colors":{"product_title":"#333","product_price":"#666666","product_summary":"#666666","button_background":"#233642","button_color":"#ffffff","product_active_tab_background":"#f5f5f5"},"modal_layout":"row","modal_image_width":1,"modal_margin":30,"modal_width":1200,"button_width":100,"button_padding":10,"button_radius":"0"},"button_radius":"0","embed_margin":10,"product_padding":10}}</script></div><script async src="https://cdn.shoprocket.io/loader.js"></script>`;

  return (
    <div className="min-h-screen">
      <div className="w-full h-96 mt-16 sm:mt-24 bg-cover bg-center bg-no-repeat bg-fixed bg-gradient-to-b from-black via-transparent to-transparent">
        <div className="w-full h-full flex max-sm:flex-col justify-center items-center">
          <div className={`sm:w-1/2 h-full w-full ${styles.bgImageHaircare}`}>
            <a href="/products/haircare">
              <div className={`h-full text-center relative translate-y-2/3`}>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm w-fit mx-auto px-5 py-1 rounded-tl-[40px] rounded-br-[40px]">
                  <h1 className="text-4xl font-light">Haircare</h1>
                  <span className="max-sm:hidden">
                    <span className="hover:underline">
                      Check out our hair products
                    </span>{" "}
                    &rarr;
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className={`sm:w-1/2 h-full w-full ${styles.bgImageSkincare}`}>
            <a href="/products/skincare">
              <div className={`h-full text-center relative translate-y-2/3`}>
                <div className="bg-black bg-opacity-30 backdrop-blur-sm w-fit mx-auto px-5 py-1 rounded-tl-[40px] rounded-br-[40px]">
                  <h1 className="text-4xl font-light">Skincare</h1>
                  <span className="max-sm:hidden">
                    <span className="hover:underline max-sm:hidden">
                      Check out our skin care products
                    </span>{" "}
                    &rarr;
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="text-sm breadcrumbs mt-5 mx-auto sm:w-4/5 px-4">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a>Products</a>
          </li>
        </ul>
      </div>
      <div className="text-4xl font-medium text-center mt-8">All Products</div>
      <div
        className="w-full h-full my-4 pb-24"
        dangerouslySetInnerHTML={{ __html: data }}
      />
    </div>
  );
}
