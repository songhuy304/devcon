import { cn } from "@/shared/utils";

interface ButterflyAnimationProps {
  right?: boolean;
  className?: string;
}

const ButterflyAnimation: React.FC<ButterflyAnimationProps> = ({
  right,
  className,
}) => {
  return (
    <div
      className={cn(
        "absolute left-[45%] bottom-[0%] w-full h-full z-10 hidden lg:block",
        className
      )}
    >
      <div className="butterfly-container">
        <div className="butterflies-group">
          <div className="butterfly butterfly-1">
            <div className="butterfly-oval-squish">
              <div className="butterfly-oval">
                <div className="butterfly-radial">
                  <div className="butterfly-gfx">
                    <div className="butterfly-anim"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="butterfly butterfly-2">
            <div className="butterfly-oval-squish">
              <div className="butterfly-oval">
                <div className="butterfly-radial">
                  <div className="butterfly-gfx">
                    <div className="butterfly-anim"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {right && (
            <div className="butterfly butterfly-3 right-butterfly">
              <div className="butterfly-oval-squish right">
                <div className="butterfly-oval right">
                  <div className="butterfly-radial right">
                    <div className="butterfly-gfx right">
                      <div className="butterfly-anim right"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { ButterflyAnimation };
