"use client";

import Heading from "@/components/heading";
import { Video } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./constants";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Empty from "@/components/Empty";
import Loader from "@/components/Loader";
import { onOpen } from "@/redux/modal/modalSlice";
import { useDispatch } from "react-redux";
import { useToast } from "@/components/ui/use-toast";

const VideoPage = () => {
  const router = useRouter();
  const [video, setVideo] = useState<string>();
  const dispatch = useDispatch();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    try {
      setVideo(undefined);

      const response = await axios.post("/api/video", value);

      setVideo(response.data[0]);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        dispatch(onOpen());
      } else {
        toast({ title: "Something went wrong", variant: "destructive" });
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title={"Video Generation"}
        description={"Tell me anything and I will turn it into a video."}
        icon={Video}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg drop-shadow items-center bg-white border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 pl-4 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Dog running around with a frisbee"
                        {...field}
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button
                type="submit"
                className="col-span-12 lg:col-span-2 w-full btn btn-primary"
                disabled={isLoading}
              >
                Generate
              </button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {!video && !isLoading && <Empty label={"No video generated"} />}
          {video && (
            <video
              controls
              className="w-full aspect-video mt-8 rounded-lg border bg-black"
            >
              <source src={video} />
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
