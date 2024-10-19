<<<<<<< HEAD

=======
>>>>>>> 64e5aadd3615b8820740673a69e504c5a51c7a24
import React, { FC } from "react";

interface HeadProps {
  title: string;
  description: string;
  keywords: string;
}

const Heading: FC<HeadProps> = ({ title, description, keywords }) => {
  return (
    <>
      <title> {title}</title>
<<<<<<< HEAD
      <meta name="viewport" content="width=device-width, initial-scale=1" />
=======
      <meta name="viewport" content="width=devoce-width, initial-scale=1" />
>>>>>>> 64e5aadd3615b8820740673a69e504c5a51c7a24
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </>
  );
};


export default Heading;