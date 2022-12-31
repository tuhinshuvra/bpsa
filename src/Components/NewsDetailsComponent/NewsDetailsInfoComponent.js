import React from "react";
import { TimeIcon } from "../../assets/Icons/Icons";
import ImageComponent from "../Common/ImageComponent";

const NewsDetailsInfoComponent = () => {
  return (
    <div>
      <h4 className="text-main">
        Taina Blue Retreat is a Converted Tower on the Greek Coast
      </h4>
      <div className="flex items-center space-x-2">
        <TimeIcon />
        23 Mar, 2022
      </div>
      <ImageComponent
        image={`https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`}
        className="w-full h-[300px] object-cover rounded-md"
      />
      <p className="text-justify my-5">
        Greater Bridgeport – For a few moments on, August 11, 2020, the
        discussion of the ravages from the pandemic of COVID-19 was pushed aside
        by the rushing tide of history. Senator Kamala Harris of California
        became the nation’s first African American woman nominated for the vice
        presidency of the United States. It is a moment to be savored, a time to
        reflect, and a new journey to begin. Shirley Chisholm was the first
        African American woman elected to Congress, and the first Black major
        party candidate to run for president of the United States. In 1972 she
        said, “at present, our country needs women’s idealism and determination,
        perhaps more in politics than anywhere else.” The historicity of this
        hour reminds us again of that idealism, determination, and authentic
        sensitivity we often find in women. It just seems to be a part of who
        they are. It often appears in the way they govern. There is an undying
        belief on the part of women, expressed in the words of former
        presidential candidate Hillary Rodham Clinton, “we are agents of change,
        we are drivers of progress, we are makers of peace – all we need is a
        fighting chance.” This is a bold move on the part of Vice President Joe
        Biden. It is another opportunity for our nation to move a little closer
        towards a more perfect union. It is a union for which Dr. Martin Luther
        King, Jr., said, “one day we will judge people not by the color of their
        skin but by the content of their character.” While the NAACP does not
        endorse candidates, we are compelled to recognize the historic impact of
        these rare moments in time. This election will really be for the very
        soul of our nation. As the author James Cone has written When My Soul
        Looks Back, “it wonders how I get over.” I can hear the voice of Harriet
        Tubman humming.{" "}
      </p>
    </div>
  );
};

export default NewsDetailsInfoComponent;
