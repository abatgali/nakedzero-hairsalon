import React from "react";
import Link from "next/link";

export default function Skincare() {
  const data = `<div class="sr-element sr-products" data-embed="multiple_products"><script type="application/json">{"publishable_key":"sr_live_pk_092ad49cf2bfca49991c2bf97756542948b4","options":{"products_to_display":"categorized","categories":["skin-care-products"],"product_size":"medium","image_dimension_value":"crop","image_aspect_ratio":"portrait","button_style":"standard","variation_style":"on_hover","open_product_in":"popup","button_position":"inline","product_default_sorting_order":"product_order","product_pagination_limit":"12","hide_out_of_stock":"0"},"includes":{"show_search_box":"1","show_sort_by":"1","show_per_page":"1","show_category_dropdown":"1","show_currency_dropdown":"1","show_language_dropdown":"1","show_product_filters":"1","show_product_name":"1","show_product_price":"1","show_product_image":"1","show_product_summary":"1","open_modal_on_image_click":"1","show_view_product_button":"1","show_add_to_cart_button":"1","show_min_max_order_quantity":"1","show_sale":"1","show_free_shipping":"1","show_new_product":"1","show_digital_download":"1","show_pwyw":"1","image_swap":"1","show_button_icons":"1"},"product_popup":{"show_product_name":"1","show_product_price":"1","show_product_summary":"1","show_product_description":"1","show_product_image":"1","show_select_quantity":"1","show_image_thumbnails":"1","show_product_reviews":"1","show_product_sku":"1","show_product_categories":"1","show_social_sharing_icons":"1","show_related_products":"1","thumbnail_layout":"horizontal_below","image_dimension_value":"crop","image_aspect_ratio":"portrait","variation_styling":"dropdown","show_min_max_order_quantity":"1","show_sale":"1","show_free_shipping":"1","show_new_product":"1","show_digital_download":"1","show_pwyw":"1","show_product_tabs":"1","image_zoom":"1","lightbox_gallery":"1","show_stock":"0"},"styles":{"align_content":"center","product_title":"#314d5d","product_price":"#2d2d2d","product_summary":"#777777","button_background":"#233642","button_color":"#ffffff","view_product_button_background":"#233642","view_product_button_color":"#ffffff","view_cart_button_background":"#233642","view_cart_button_color":"#ffffff","product_background":"#ffffff","modal_background":"#ffffff","button_font_weight":"normal","popup":{"colors":{"product_title":"#333","product_price":"#666666","product_summary":"#666666","button_background":"#233642","button_color":"#ffffff","product_active_tab_background":"#f5f5f5"},"modal_layout":"row","modal_image_width":1,"modal_margin":30,"modal_width":1200,"button_width":100,"button_padding":10,"button_radius":"0"},"button_radius":"0","embed_margin":10,"product_padding":10}}</script></div><script async src="https://cdn.shoprocket.io/loader.js"></script>`;
  return (
    <>
      <div className="min-h-screen">
        <div className="text-sm breadcrumbs sm:mt-32 mt-24 mx-auto sm:w-4/5 px-4">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>Skin care</li>
          </ul>
        </div>
        <h1 className="text-4xl font-medium text-center mt-5 ">Skin care</h1>
        <p className="text-center mt-4 sm:w-2/3 mx-auto">
          Keep your skin looking healthy and radiant with our selection of skin
          care products.
        </p>
        <div
          className="w-full h-full my-4 pb-24"
          dangerouslySetInnerHTML={{ __html: data }}
        />
      </div>
    </>
  );
}
