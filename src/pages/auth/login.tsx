import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from 'zod'

const loginForm = z.object({
    email: z.string().email(),
})

type LoginForm = z.infer<typeof loginForm>

export function Login(){

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<LoginForm>()

   async function handleLogin(data: LoginForm) {
    try {
        console.log(data)
        await new Promise((resolve) => setTimeout(resolve, 2000))
        toast.success('Enviado email de auth', {
            action:{
                label: 'Reenviar',
                onClick: () => handleLogin(data)
            }
        })
    } catch (error) {
        toast.error('ocorreu uma exceção')
    }
        
        
    }
    return (
      <>
        <Helmet title="Login"/>
        <div className="p-8">
            <Button asChild variant="ghost" className="absolute right-8 top-8">{/*Deixar o botao no topo à direita*/}
              <Link to="/sign-add">
                Cadastrar Estabelecimento
              </Link>
            </Button>
            <div className="flex w-[350px] flex-col justify-center gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                     Acessar Login
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Acompanhe suas vendas pelo painel
                    </p>
                </div>

                <form onSubmit={ handleSubmit(handleLogin) } className="space-y-4">
                    <div className="space-y-2"> 
                        <Label> Seu E-mail</Label>
                        <Input id="email" type="email" {...register('email')}/>
                    </div>
                    
                    <Button disabled={ isSubmitting } className="w-full" type="submit">Acessar Painel</Button>
                </form>
            </div>
        </div>
      </>
    )
}