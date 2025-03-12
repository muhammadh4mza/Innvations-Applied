"use client";
import ErrorMain from "@/components/layout/main/ErrorMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Innovations Applied",
  description: "Innovations Applied",
};
export default function Error() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <ErrorMain />
    </PageWrapper>
  );
}
