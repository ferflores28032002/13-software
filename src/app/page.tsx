"use client";

import Link from "next/link";

import { MaxWidthWrapper, buttonVariants } from "@/components";
import useAuthValidation from "@/hooks/auth/useAuthValidation";
import { useAuthStore } from "@/store";

export default function Home() {
  const user = useAuthStore((state) => state.user);
  const { token } = useAuthValidation();

  return (
    <>
      {token && (
        <MaxWidthWrapper>
          <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Bienvenido, {user?.name} - Tu plataforma {""}
              <span className="text-blue-600" id="cypress-title-home">
                de desarrollo de software
              </span>
            </h1>
            <p
              className="mt-6 text-lg max-w-prose text-muted-foreground"
              id="cypress-description-home"
            >
              ¡Bienvenido {user?.name}! Esta es su puerta de entrada para
              dominar el desarrollo de software. Nuestra aplicación le permite
              conectarse, crear e innovar, todo en una plataforma intuitiva.
              Obtenga una descripción general completa de sus proyectos, código
              y herramientas en tiempo real. ¡Diga adiós a los dolores de cabeza
              del desarrollo y hola a la codificación optimizada y eficiente!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link
                href="/users"
                className={buttonVariants()}
                id="cypress-btn-accounts"
              >
                Usuarios &rarr;
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      )}
    </>
  );
}
