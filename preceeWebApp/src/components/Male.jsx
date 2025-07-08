/* eslint-disable react/prop-types */
import {
  Text,
  Input,
  HStack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "./card";

export default function Male({ register }) {
  const colorInputFocus = useColorModeValue(
    "rgba(224, 222, 222, 0.5)",
    "rgba(247, 247, 247, 0.1)"
  );
  return (
    <>
      <Card>
        <HStack>
          <Image
            src={"/images/male1.png"}
            objectFit="cover"
            maxW={10}
            alt="Male Averta"
            mr={3}
          />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Male</Text>
        </HStack>
        <HStack>
          <div>
            <Text style={styles.lebal}>Top</Text>

            <Input
              placeholder="Length"
              focusBorderColor={colorInputFocus}
              type="number"
              id="topLenght"
              {...register("topLenght")}
            />
            <Input
              placeholder="Shoulder"
              focusBorderColor={colorInputFocus}
              type="number"
              id="showlder"
              {...register("showlder")}
            />
            <Input
              placeholder="Chest"
              focusBorderColor={colorInputFocus}
              type="number"
              id="chest"
              {...register("chest")}
            />
            <Input
              placeholder="Sleeve"
              focusBorderColor={colorInputFocus}
              type="number"
              id="sleeve"
              {...register("sleeve")}
            />

            <Input
              placeholder="Round Sleeve"
              focusBorderColor={colorInputFocus}
              type="number"
              id="roundSleeve"
              {...register("roundSleeve")}
            />

            <Input
              placeholder="Fit/Tommy"
              focusBorderColor={colorInputFocus}
              type="number"
              id="tommy"
              {...register("tommy")}
            />

            <Input
              placeholder="Wrist"
              focusBorderColor={colorInputFocus}
              type="number"
              id="wrist"
              {...register("wrist")}
            />
            <Input
              placeholder="Neck"
              focusBorderColor={colorInputFocus}
              type="number"
              id="neck"
              {...register("neck")}
            />
            <Input
              placeholder="Biceps"
              focusBorderColor={colorInputFocus}
              type="number"
              id="biceps"
              {...register("biceps")}
            />
            <Input
              placeholder="Upper Arm"
              focusBorderColor={colorInputFocus}
              type="number"
              id="upperArm"
              {...register("upperArm")}
            />
            <Input
              placeholder="Armhole Depth"
              focusBorderColor={colorInputFocus}
              type="number"
              id="armholeDepth"
              {...register("armholeDepth")}
            />
            <Input
              placeholder="Neck to Shoulder"
              focusBorderColor={colorInputFocus}
              type="number"
              id="neckToShoulder"
              {...register("neckToShoulder")}
            />
          </div>

          <div>
            {/* ...........................................Bottom Measurement ........................................ */}
            <Text style={styles.lebal}>Trouser/Bottom</Text>
            <Input
              placeholder="Length"
              focusBorderColor={colorInputFocus}
              type="number"
              id="bottomLenght"
              {...register("bottomLenght")}
            />
            <Input
              placeholder="Waist"
              focusBorderColor={colorInputFocus}
              type="number"
              id="waist"
              {...register("waist")}
            />
            <Input
              placeholder="Thigh"
              focusBorderColor={colorInputFocus}
              type="number"
              id="thigh"
              {...register("thigh")}
            />
            <Input
              placeholder="Knee"
              focusBorderColor={colorInputFocus}
              type="number"
              id="knee"
              {...register("knee")}
            />
            <Input
              placeholder="Seat"
              focusBorderColor={colorInputFocus}
              type="number"
              id="seat"
              {...register("seat")}
            />
            <Input
              placeholder="Flap"
              focusBorderColor={colorInputFocus}
              type="number"
              id="flap"
              {...register("flap")}
            />
            <Input
              placeholder="Waist to Knee"
              focusBorderColor={colorInputFocus}
              type="number"
              id="waistToKnee"
              {...register("waistToKnee")}
            />
            <Input
              placeholder="Ankle/Hem"
              focusBorderColor={colorInputFocus}
              type="number"
              id="ankleHem"
              {...register("ankleHem")}
            />
            <Input
              placeholder="Front Rise"
              focusBorderColor={colorInputFocus}
              type="number"
              id="frontRise"
              {...register("frontRise")}
            />
            <Input
              placeholder="Back Rise"
              focusBorderColor={colorInputFocus}
              type="number"
              id="backRise"
              {...register("backRise")}
            />
            <Input
              placeholder="Shoulder to Ankle"
              focusBorderColor={colorInputFocus}
              type="number"
              id="shoulderToAnkle"
              {...register("shoulderToAnkle")}
            />
            <Input
              placeholder="Shoulder to knee"
              focusBorderColor={colorInputFocus}
              type="number"
              id="shoulderToKnee"
              {...register("shoulderToKnee")}
            />
          </div>
        </HStack>
      </Card>
    </>
  );
}

const styles = [
  {
    container: {
      flex: 1,
    },
    modalToggle: {
      marginBottom: 10,
      borderWidth: 1,
      borderColor: "#f2f2d2",
      padding: 10,
      borderRadius: 10,
      alignSelf: "center",
    },
    modalTcolse: {
      marginTop: 15,
      marginRight: 24,
      marginBottom: 8,
    },
    modalContent: {
      flex: 1,
    },
    twoColum: {
      flex: 2,
      flexDirection: "row",
      gap: 8,
    },
    colContent: {
      flexGrow: 1,
    },
    lebal: {
      fontSize: 16,
      fontFamily: "roboto-regular",
      paddingRight: 10,
    },
  },
];
