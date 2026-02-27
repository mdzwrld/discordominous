"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2, Wand2 } from "lucide-react"

import { discordStrategyPersonalizer } from "@/ai/flows/discord-strategy-personalizer-flow"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  businessGoals: z.string().min(20, {
    message: "Por favor, descreva seus objetivos com pelo menos 20 caracteres.",
  }),
})

export function AiToolSection() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessGoals: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    setResult(null)
    setError(null)
    try {
      const response = await discordStrategyPersonalizer(values)
      setResult(response.tip)
    } catch (e) {
      console.error(e)
      setError("Ocorreu um erro ao gerar sua dica. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="container mx-auto max-w-4xl px-4 md:px-6">
      <Card className="border-primary/20 bg-card shadow-lg shadow-primary/5">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
             <Wand2 className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-extrabold">
            Personalize sua Estratégia com IA
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Receba uma dica conceitual da nossa IA para iniciar sua monetização no Discord.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="businessGoals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Seus objetivos de negócio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ex: 'Quero vender um curso de R$47 para minha audiência de design' ou 'Preciso criar uma comunidade paga para meus seguidores do YouTube'."
                        className="min-h-[100px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full font-bold" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Gerando dica...
                  </>
                ) : (
                  "Gerar Dica Personalizada"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        {(result || error) && (
            <CardFooter>
                 <Card className="w-full bg-background">
                    <CardHeader>
                        <CardTitle className="text-lg">{error ? 'Erro' : 'Sua Dica Personalizada'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className={error ? 'text-destructive' : 'text-foreground'}>{result || error}</p>
                    </CardContent>
                 </Card>
            </CardFooter>
        )}
      </Card>
    </section>
  )
}
