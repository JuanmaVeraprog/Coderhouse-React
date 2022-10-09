import React from "react";
import Card from "../Card/Card";
import Flex from "../Flex/Flex";

function ItemList() {
  return (
    <div>
      <Flex>
        <Card
          img="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/ca941236-2a66-47d6-8949-318225a4e6a7/court-vision-low-zapatillas-NFB8Zb.png"
          title="Court Vision Low"
          price="99,9 €"
        />
        <Card
          img="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/13545718-2eb3-4a8c-9bb9-32b5b8c0a376/air-force-1-07-zapatillas-Hx43wp.png"
          title="Nike Air Force 1 '07"
          price="129,9 €"
        />
        <Card
          img="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/fca59736-ff84-4797-9e64-0978d3b43731/blazer-low-77-vintage-zapatillas-qhV3wL.png"
          title="Nike Blazer Low '77 Vintage"
          price="89.9 €"
        />
        <Card
          img="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/2c12c7bc-7b4a-4289-b262-4bacf77801bc/air-max-90-g-zapatillas-de-golf-sqQCLC.png"
          title="Nike Air Max 90 G"
          price="149,99 €"
        />
      </Flex>
    </div>
  );
}

export default ItemList;
