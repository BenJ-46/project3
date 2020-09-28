import React from 'react'



const Collab = () => {
  return (
    <>
    <h1>Collab Page</h1>


    </>
  )
}

export default Collab

// import React, { useState } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption
// } from 'reactstrap';

// const items = [
//   {
//     id: 1,
//     altText: 'Slide 1',
//     caption: 'Slide 1'
//   },
//   {
//     id: 2,
//     altText: 'Slide 2',
//     caption: 'Slide 2'
//   },
//   {
//     id: 3,
//     altText: 'Slide 3',
//     caption: 'Slide 3'
//   },
//   {
//     id:4 ,
//     altText: 'Slide 4',
//     caption: 'Slide 4'
//   },
//   {
//     id: 5,
//     altText: 'Slide 5',
//     caption: 'Slide 5'
//   },
//   {
//     id: 6,
//     altText: 'Slide 6',
//     caption: 'Slide 6'
//   },
//   {
//     id: 7,
//     altText: 'Slide 7',
//     caption: 'Slide 7'
//   },
//   {
//     id: 8,
//     altText: 'Slide 8',
//     caption: 'Slide 8'
//   },
//   {
//     id: 9,
//     altText: 'Slide 9',
//     caption: 'Slide 9'
//   },
//   {
//     id: 10,
//     altText: 'Slide 10',
//     caption: 'Slide 10'
//   }
// ];

// const Example = (props) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   }

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   }

//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   }

//   const slides = items.map((item) => {
//     return (
//       <CarouselItem
//         className="custom-tag"
//         tag="div"
//         key={item.id}
//         onExiting={() => setAnimating(true)}
//         onExited={() => setAnimating(false)}
//       >
//         <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
//       </CarouselItem>
//     );
//   });

//   return (
//     <div>
//       <style>
//         {
//           `.custom-tag {
//               max-width: 100%;
//               height: 500px;
//               background: black;
//             }`
//         }
//       </style>
//       <Carousel
//         activeIndex={activeIndex}
//         next={next}
//         previous={previous}
//       >
//         <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
//         {slides}
//         <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
//         <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
//       </Carousel>
//     </div>
//   );
// }

// export default Example;