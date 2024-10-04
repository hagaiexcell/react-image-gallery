type RatingWidgetProps = {
  rating: number;
};

const RatingWidget = ({ rating }: RatingWidgetProps) => {
  const filledStar = "/src/assets/star.png";
  const emptyStar = "/src/assets/star-white.png";
  return (
    <div className="flex w-fit items-center justify-center gap-1 rounded-md bg-secondary p-1 shadow-lg">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <img
            key={index}
            className="w-3"
            src={index < rating ? filledStar : emptyStar}
          />
        ))}
    </div>
  );
};

export default RatingWidget;
