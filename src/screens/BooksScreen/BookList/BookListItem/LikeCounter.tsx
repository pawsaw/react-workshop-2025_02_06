export interface LikeCounterProps {
  numLikes: number;
  onNumLikesChanged: (numLikes: number) => void;
}

export const LikeCounter = ({ numLikes, onNumLikesChanged }: LikeCounterProps) => {
  return (
    <button className="secondary" onClick={() => onNumLikesChanged(numLikes + 1)}>
      <span>👏</span>
      {numLikes}
    </button>
  );
};
