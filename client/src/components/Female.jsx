/* eslint-disable react/prop-types */
import Card from "./card";
import {
  HStack,
  Image,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Female = ({ register }) => {
  const colorInputFocus = useColorModeValue(
    "rgba(224, 222, 222, 0.5)",
    "rgba(247, 247, 247, 0.1)"
  );
  return (
    <Card>
      <HStack>
        <Image
          src={"/images/female1.png"}
          objectFit="cover"
          maxW={10}
          alt="Male Averta"
          mr={3}
        />
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Female</Text>
      </HStack>

      <HStack>
        <div>
          <Input
            placeholder="Neck"
            focusBorderColor={colorInputFocus}
            type="number"
            max={999}
            min={0}
            id="fneck"
            {...register("fneck", { maxLength: 3 })}
          />
          <Input
            placeholder="Shoulder"
            focusBorderColor={colorInputFocus}
            type="number"
            id="fShoulder"
            {...register("fShoulder")}
          />
          <Input
            placeholder="Front chest width"
            focusBorderColor={colorInputFocus}
            type="number"
            id="frontChestWidth"
            {...register("frontChestWidth")}
          />

          <Input
            placeholder="Back chest width"
            focusBorderColor={colorInputFocus}
            type="number"
            id="backChestWidth"
            {...register("backChestWidth")}
          />
          <Input
            placeholder="Bust"
            focusBorderColor={colorInputFocus}
            type="number"
            id="bust"
            {...register("bust")}
          />
          <Input
            placeholder="Under Bust"
            focusBorderColor={colorInputFocus}
            type="number"
            id="underBust"
            {...register("underBust")}
          />
          <Input
            placeholder="Upper bust"
            focusBorderColor={colorInputFocus}
            type="number"
            id="upperBust"
            {...register("upperBust")}
          />
          <Input
            placeholder="Waist"
            focusBorderColor={colorInputFocus}
            type="number"
            id="fWaist"
            {...register("fWaist")}
          />

          <Input
            placeholder="Armhole"
            focusBorderColor={colorInputFocus}
            type="number"
            id="armhole"
            {...register("armhole")}
          />

          <Input
            placeholder="Hips"
            focusBorderColor={colorInputFocus}
            type="number"
            id="hips"
            {...register("hips")}
          />

          <Input
            placeholder="Thigh"
            focusBorderColor={colorInputFocus}
            type="number"
            id="fthigh"
            {...register("fthigh")}
          />

          <Input
            placeholder="Kneel"
            focusBorderColor={colorInputFocus}
            type="number"
            id="fknee"
            {...register("fknee")}
          />
          <Input
            placeholder="Ankle"
            focusBorderColor={colorInputFocus}
            type="number"
            id="ankle"
            {...register("ankle")}
          />
          <Input
            placeholder="Arm Lenght"
            focusBorderColor={colorInputFocus}
            type="number"
            id="armLenght"
            {...register("armLenght")}
          />
          <Input
            placeholder="Shoulder To Elbow"
            focusBorderColor={colorInputFocus}
            type="number"
            id="shoulderToElbow"
            {...register("shoulderToElbow")}
          />
          <Input
            placeholder="fullLength"
            focusBorderColor={colorInputFocus}
            type="number"
            id="fullLength"
            {...register("fullLength")}
          />
        </div>

        <div style={styles.colContent}>
          {/* ...........................................Bottom Measurement ........................................ */}
          {/* <Text style={styles.lebal}>Trouser/Bottom</Text> */}
          <Input
            placeholder="Shoulder to bust"
            focusBorderColor={colorInputFocus}
            type="number"
            id="shoulderToBust"
            {...register("shoulderToBust")}
          />
          <Input
            placeholder="Shoulder to U/bust"
            focusBorderColor={colorInputFocus}
            type="number"
            id="shoulderToUBust"
            {...register("shoulderToUBust")}
          />
          <Input
            placeholder="Shoulder to Wrist Fr"
            focusBorderColor={colorInputFocus}
            type="number"
            id="shoulderToWristF"
            {...register("shoulderToWristF")}
          />
          <Input
            placeholder="Shoulder to Wrist Bk"
            focusBorderColor={colorInputFocus}
            type="number"
            id="shoulderToWristB"
            {...register("shoulderToWristB")}
          />
          <Input
            placeholder="Shoulder to hip"
            focusBorderColor={colorInputFocus}
            type="number"
            id="shoulderToHips"
            {...register("shoulderToHips")}
          />

          <Input
            placeholder="Shoulder to Kneel"
            focusBorderColor={colorInputFocus}
            type="number"
            id="shoulderToKneel"
            {...register("shoulderToKneel")}
          />
          <Input
            placeholder="Blouse length"
            focusBorderColor={colorInputFocus}
            type="number"
            id="blouseLength"
            {...register("blouseLength")}
          />
          <Input
            placeholder="Trouser/Skirt Lenght"
            focusBorderColor={colorInputFocus}
            type="number"
            id="trouserLenght"
            {...register("trouserLenght")}
          />
          <Input
            placeholder="Crotch Depth"
            focusBorderColor={colorInputFocus}
            type="number"
            id="crotchDepth"
            {...register("crotchDepth")}
          />
          <Input
            placeholder="Sleeve lenght"
            focusBorderColor={colorInputFocus}
            type="number"
            id="sleeveLenght"
            {...register("sleeveLenght")}
          />
          <Input
            placeholder="Round sleeve"
            focusBorderColor={colorInputFocus}
            type="number"
            id="froundSleeve"
            {...register("froundSleeve")}
          />
          <Input
            placeholder="Cuff/Wrist"
            focusBorderColor={colorInputFocus}
            type="number"
            id="cuff"
            {...register("cuff")}
          />
          <Input
            placeholder="Nipple to nipple"
            focusBorderColor={colorInputFocus}
            type="number"
            id="nipple"
            {...register("nipple")}
          />
          <Input
            placeholder="Waist to Hips"
            focusBorderColor={colorInputFocus}
            type="number"
            id="waistToHips"
            {...register("waistToHips")}
          />
          <Input
            placeholder="Waist to kneel"
            focusBorderColor={colorInputFocus}
            type="number"
            id="waistToKneel"
            {...register("waistToKneel")}
          />
          <Input
            placeholder="Waist to floor"
            focusBorderColor={colorInputFocus}
            type="number"
            id="waistToFloor"
            {...register("waistToFloor")}
          />
        </div>
      </HStack>
    </Card>
  );
};

export default Female;
const styles = {
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
};
