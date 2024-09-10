import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from 'zod'

const loginAddForm = z.object({
    restaurantName: z.string(),
    manageName: z.string(),
    phone: z.string(),
    email: z.string().email(),
})


type LoginAddForm = z.infer<typeof loginAddForm>

export function LoginAdd(){

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<LoginAddForm>()

   async function handleAddLogin(data: LoginAddForm) {
    try {
        console.log(data)
        await new Promise((resolve) => setTimeout(resolve, 2000))
        toast.success('Cadastro realizado com sucesso!!!', {
            action:{
                label: 'Realizar Login',
                onClick: () => navigate('/sign-in')
            }
        })
        
    } catch (error) {
        toast.error('erro ao cadastrar o restaurante!!')
    }
        
        
    }
    return (
      <>
        <Helmet title="Cadastro"/>
        <div className="p-8">
            <Button asChild variant="ghost" className="absolute right-8 top-8">{/*Deixar o botao no topo à direita*/}
              <Link to="/sign-in">
                Fazer Login
              </Link>
            </Button>
            <div className="flex w-[350px] flex-col justify-center gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                     Criar conta
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Vamos ser parceiros de vendas?
                    </p>
                </div>

                <form onSubmit={ handleSubmit(handleAddLogin) } className="space-y-4">
                    {/*NOme fantasia*/}
                    <div className="space-y-2"> 
                        <Label htmlFor="restaurantName">Nome Fantasia</Label>
                        <Input id="restaurantName" type="text" {...register('restaurantName')}/>
                    </div>
                    {/*Email*/}
                    <div className="space-y-2"> 
                        <Label htmlFor="manageName"> Nome Proprietário</Label>
                        <Input id="manageName" type="text" {...register('manageName')}/>
                    </div>
                    {/*Email*/}
                    <div className="space-y-2"> 
                        <Label htmlFor="phone"> Telefone</Label>
                        <Input id="phone" type="tel" {...register('phone')}/>
                    </div>
                    {/*Email*/}
                    <div className="space-y-2"> 
                        <Label htmlFor="email"> Seu E-mail</Label>
                        <Input id="email" type="email" {...register('email')}/>
                    </div>
                    
                    <Button disabled={ isSubmitting } className="w-full" type="submit">
                        Finalizar Cadastro
                    </Button>

                    <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                        Ao continuar, você concorda com nossos
                        <a href="" className="underline underline-offset-4"> Termos de serviços</a>
                        {' '} e {' '}
                        <a href="" className="underline underline-offset-4">Políticas de privacidade</a>
                    </p>
                </form>
            </div>
        </div>
      </>
    )
}