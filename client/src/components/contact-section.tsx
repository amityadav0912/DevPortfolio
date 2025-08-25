import { useState } from "react";
import { Mail, Phone, MapPin, Github, Code, Linkedin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { ContactFormData } from "@shared/schema";
import { contactFormSchema } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
    onSettled: () => {
      setIsSubmitting(false);
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "amit09yadav12@gmail.com",
      href: "mailto:amit09yadav12@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone", 
      value: "+91 8306334469",
      href: "tel:+918306334469"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Bengaluru, Karnataka",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/amityadav0912",
      label: "GitHub"
    },
    {
      icon: <Code className="h-5 w-5" />,
      href: "https://leetcode.com/amit09yadav12",
      label: "LeetCode"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/amityadav",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:amit09yadav12@gmail.com",
      label: "Email"
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-black dark:to-gray-800"
      data-testid="contact-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted dark:text-gray-300 max-w-2xl mx-auto">
            Let's discuss opportunities and collaborate on exciting projects
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4" data-testid={`contact-info-${index}`}>
                    <div className="bg-primary text-white p-3 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted dark:text-gray-400">{info.label}</div>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-secondary dark:text-white font-medium hover:text-primary transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-secondary dark:text-white font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-secondary dark:text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-primary p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
                    data-testid={`social-link-${social.label.toLowerCase()}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-6">Send me a message</h3>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-secondary dark:text-white mb-2">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    {...form.register("name")}
                    className={form.formState.errors.name ? "border-destructive" : ""}
                    data-testid="input-name"
                  />
                  {form.formState.errors.name && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-secondary dark:text-white mb-2">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    {...form.register("email")}
                    className={form.formState.errors.email ? "border-destructive" : ""}
                    data-testid="input-email"
                  />
                  {form.formState.errors.email && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium text-secondary dark:text-white mb-2">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Enter subject"
                    {...form.register("subject")}
                    className={form.formState.errors.subject ? "border-destructive" : ""}
                    data-testid="input-subject"
                  />
                  {form.formState.errors.subject && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-secondary dark:text-white mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Your message..."
                    {...form.register("message")}
                    className={`resize-none ${form.formState.errors.message ? "border-destructive" : ""}`}
                    data-testid="textarea-message"
                  />
                  {form.formState.errors.message && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.message.message}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting || contactMutation.isPending}
                  className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
                  data-testid="button-submit-contact"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting || contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
