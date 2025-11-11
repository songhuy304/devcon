import Gravity, { MatterBody } from "@/components/gravity";
import Badge from "@/components/ui/badge";

const GravitySection = () => {
  return (
    <div className="sm:h-[250px] xl:h-[300px] h-[350px] relative w-full z-0 pointer-events-auto">
      <div className="absolute w-full bottom-[-2px] h-[200%]">
        <Gravity gravity={{ x: 0, y: 1 }}>
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="37%"
            y="10%"
          >
            <Badge children="135 COuntries Represented" />
          </MatterBody>
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="42%"
            y="30%"
          >
            <Badge colorScheme={"green"} children="Impact Spaces" />
          </MatterBody>
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="40%"
            y="20%"
            angle={10}
          >
            <Badge colorScheme={"orange"} children="10 Tracks" />
          </MatterBody>
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="75%"
            y="10%"
          >
            <Badge colorScheme={"blue"} children="21 DIPs" />
          </MatterBody>
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="80%"
            y="20%"
          >
            <Badge colorScheme={"red"} children="33 RTD Events" />
          </MatterBody>
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="20%"
            y="10%"
          >
            <Badge colorScheme={"teal"} children="1255 Attendees" />
          </MatterBody>

          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="52%"
            y="20%"
          >
            <Badge colorScheme={"orange"} children="1255 Attendees" />
          </MatterBody>

          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="30%"
            y="12%"
          >
            <Badge colorScheme={"teal"} children="1255 Attendees" />
          </MatterBody>

          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="10%"
            y="12%"
          >
            <Badge colorScheme={"yellow"} children="1255 Attendees" />
          </MatterBody>

          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="90%"
            y="13%"
          >
            <Badge colorScheme={"green"} children="1255 Attendees" />
          </MatterBody>
        </Gravity>
      </div>
    </div>
  );
};

export default GravitySection;
