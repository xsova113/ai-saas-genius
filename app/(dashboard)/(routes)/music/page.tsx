"use client";

import Heading from "@/components/heading";
import { Music } from "lucide-react";
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

const MusicPage = () => {
  const router = useRouter();
  const [music, setMusic] = useState<string>();
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
      setMusic(undefined);

      const response = await axios.post("/api/music", value);

      setMusic(response.data.audio);
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
        title={"Music Generation"}
        description={"Tell me anything and I will turn it into a music."}
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
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
                        placeholder="DJ Dubstep"
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
          {!music && !isLoading && <Empty label={"No music generated"} />}
          {music && (
            <audio controls className="w-full mt-8">
              <source src={music} />
            </audio>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
