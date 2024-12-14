// pages/aviso-de-privacidad.js
'use client';
import Image from 'next/image';

const PageHeader = () => (
    <div className="text-center mb-6">
        <p className="text-gray-600">Tu Kapital en Evolución, SAPI de CV, SOFOM, ENR</p>
        <p className="font-bold">TANKEF</p>
        <div className="my-8 flex flex-col items-center justify-center">
            <Image
                src="/tankef-logo.jpg"
                alt="TANKEF - ¡INVIERTE, SUMA Y CRECE!"
                width={400}
                height={236}
                className="w-64"
            />
        </div>
    </div>
);

const PageFooter = () => (
    <footer className="text-xs text-gray-500 text-center mt-8 pb-8">
        Montes Urales 632, 4to piso Local 2, Col. Lomas de Chapultepec IV Sección, C.P. 11000, Alcaldía Miguel Hidalgo, Ciudad de México
    </footer>
);

export default function AvisoPrivacidad() {
    return (
        <div className="min-h-screen bg-white">
            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <PageHeader />

                <h1 className="text-2xl font-bold text-center mb-12">AVISO DE PRIVACIDAD</h1>

                <div className="space-y-6">
                    <p className="text-justify">
                        Los datos personales se recaban y tratan de manera lícita conforme a las disposiciones establecidas en la{' '}
                        <span className="font-bold">Ley Federal de Protección de Datos Personales en Posesión de los Particulares</span>.
                    </p>

                    <p className="text-justify">
                        Estimados usuarios: se les comunica que <span className="font-bold">TU KAPITAL EN EVOLUCIÓN, SAPI DE CV SOFOM ENR</span>,
                        (a quien en lo sucesivo y para efectos del presente aviso se le denominará como TANKEF), con domicilio en
                        Montes Urales Norte 632, 4to piso Local 2, Col. Lomas de Chapultepec IV Sección, C.P. 11000, Alcaldía Miguel
                        Hidalgo, Ciudad de México, es el responsable del uso y protección de sus datos personales, lo anterior con
                        fundamento en los artículos 117, fracción V de la Ley Federal de Transparencia y Acceso a la Información Pública
                        (última reforma publicada en el Diario Oficial de la Federación el veintisiete de enero de dos mil diecisiete),
                        22, 23, 24, 25, 28, de la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados,
                        así como del Reglamento de la Ley Federal de Protección de Datos Personales en Posesión de Terceros (en
                        adelante "Reglamento"), en armonía con los Lineamientos del Aviso de Privacidad publicados en el Diario
                        Oficial de la Federación de fecha 17 de Enero de 2013, al que refiere el Artículo 43 de la Ley Federal de
                        Protección de Datos Personales en Posesión de Particulares; por lo que hace de su conocimiento y pone a su
                        disposición el presente AVISO DE PRIVACIDAD, con la finalidad de proteger sus datos en los términos que la
                        Ley y el Reglamento disponen para tales efectos.
                    </p>

                    <p className="text-justify">
                        Este documento establece los procedimientos de privacidad y seguridad con respecto al Sitio Web y Aplicación
                        móvil de TANKEF y que es parte integral de los Términos y Condiciones de Uso del Sitio Web y Aplicación móvil.
                        Las políticas incluidas en este documento podrán ser modificadas periódica y unilateralmente por TANKEF sin
                        previa notificación, por lo que se recomienda al usuario que revise de manera regular el Aviso de Privacidad.
                        Para más información y en caso de dudas o aclaraciones el usuario podrá comunicarse al siguiente correo:{' '}
                        <a href="mailto:contacto@tankef.com" className="text-blue-600 hover:underline">contacto@tankef.com</a>
                    </p>

                    <p className="text-justify">
                        TANKEF podrá requerir a los usuarios un correo electrónico válido, contraseña, nombre(s) y apellidos y
                        dirección física como condición para el uso total o parcial del Sitio Web y la aplicación móvil. Por el
                        simple uso del Sitio Web o la aplicación móvil los usuarios aceptan someterse a los Términos y Condiciones
                        de Uso y/a los Términos de la Política de Privacidad, debiendo presentar una dirección de correo electrónico
                        válida, contraseña, nombre(s) completo(s), dirección física y teléfono, datos de los cuales se hace mención
                        de forma enunciativa más no limitativa en el momento que se le requiera.
                    </p>

                    <p className="text-justify">
                        TANKEF estará facultada para utilizar Cookies, Java Scripts y/o cualquier tecnología para reconocer el
                        usuario y su acceso al Sitio Web o aplicación móvil, así como rastrear su uso.
                    </p>

                    <p className="text-justify">
                        TANKEF podrá también registrar las direcciones IP o la ubicación de la computadora de los usuarios en
                        Internet para efectos de administración y temas de uso, así como para rastreo de la sesión o comportamiento
                        del usuario en el Sitio Web y/o aplicación móvil. Atento a lo anterior, TANKEF podrá usar las direcciones
                        IP en caso de que se sospeche o se detecten prácticas ilegales o incumplimiento de esas Políticas de
                        Privacidad y/o Términos y Condiciones de Uso. Al utilizar direcciones de correo electrónico al momento de
                        inscribirse, TANKEF podrá enviar de manera regular mensajes con datos promocionales en relación con los
                        servicios ofrecidos por TANKEF.
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-4">I.- RECOLECCIÓN DE DATOS PERSONALES.</h2>
                    <p className="text-justify">
                        Los datos personales que son recabados por TANKEF de manera enunciativa, más no limitativa al momento de
                        registrarse como usuario de su aplicación móvil y/o sitio web son: Nombre (s) y apellidos, fecha de
                        nacimiento, género, entidad de nacimiento, estado civil, dirección, número de teléfono celular o de
                        cualquier otra telecomunicación telefónica, correo electrónico, escolaridad, CURP, clave de elector,
                        RFC, domicilio del usuario, ultimo nivel de estudios, estudios en general, empresa donde labora actualmente,
                        cargo, fecha de inicio de empleo, dirección de trabajo, sector empresarial, giro del empleo, tiempo en el
                        último empleo, teléfono de empleo; datos de terceros como lo son: número de dependientes económicos,
                        referencia familiar directa y/o laboral, en los que se incluye: nombre del referenciado, número telefónico
                        y parentesco con el usuario, número de cuenta de banco, nombre de la Institución Financiera, ingreso mensual
                        e historial crediticio, datos de voz e imagen, y datos similares, que le sean atribuibles al usuario por
                        virtud del uso del sitio web y/o aplicación.
                    </p>

                    <p className="text-justify">
                        Su información personal quedará guardada en la base de datos de TANKEF y se utilizará con los fines para
                        los cuales se recopiló. En caso de usted nos proporcione datos personales de terceros, al hacer uso de la
                        Plataforma, sitio web y/o de nuestros servicios, incluyendo enunciativa pero no limitativamente, al
                        proporcionar referencias personales para evaluar su solicitud de préstamo y/o cualquier otro servicios
                        que ofrezca TANKEF, usted reconoce que cuenta con el consentimiento de dichos terceros para compartir
                        sus datos personales a TANKEF y se hace responsable de cualquier comunicación no autorizada de datos
                        personales de dichos terceros.
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-4">II.- ¿PARA QUÉ FINES UTILIZAREMOS SUS DATOS PERSONALES?</h2>
                    <p className="text-justify">
                        Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son
                        necesarias para el servicio que solicita:
                    </p>

                    <ul className="list-disc pl-8 space-y-2">
                        <li>Informar a los solicitantes sobre los servicios y productos ofertados por TANKEF, incluyendo sus modalidades.</li>
                        <li>Responder a solicitudes de información y comentarios de los interesados sobre los productos y servicios ofertados por TANKEF.</li>
                        <li>Recibir, registrar y atender sus solicitudes de préstamo y otros servicios que ofrece TANKEF.</li>
                        <li>Verificar su identidad y validar la información que nos proporcione al realizar sus solicitudes de préstamo y/o de cualquier otro servicio que ofrezca TANKEF.</li>
                        <li>Realizar análisis de perfiles de prospectos de usuarios para determinar el grado de riesgo, antes y durante el otorgamiento de los créditos u otros servicios ofertados por TANKEF.</li>
                        <li>Registro, integración, control, manejo y administración de expedientes de usuarios.</li>
                        <li>Gestión, control, administración y actualización de la información de usuarios: personas físicas y contactos designados por personas morales.</li>
                        <li>Gestión, control y administración de los servicios de atención al usuario, para asegurar y monitorear el estado de los créditos y otros servicios que ofrezca TANKEF, así como recordatorios sobre pagos y adeudos de los usuarios.</li>
                        <li>Gestión, control y administración de las comunicaciones entre TANKEF y sus usuarios o prospectos.</li>
                        <li>Solicitar referencias personales y contactarlas para evaluar sus solicitudes de préstamo y o de cualquier otro servicio que ofrezca TANKEF y sea solicitado por el usuario.</li>
                        <li>Cobro judicial o extrajudicial de obligaciones adquiridas por los usuarios frente a TANKEF y/o terceras personas referidas por el usuario.</li>
                        <li>Gestión, control y administración de incentivos y/o recompensas a usuarios.</li>
                        <li>Verificar la identidad de forma directa y/o a través de terceros nacionales o extranjeros.</li>
                        <li>Gestión y control de tecnologías de verificación de identidad y vida para reducir riesgos de fraudes y suplantación de identidad.</li>
                        <li>Realizar labores de cobranza.</li>
                        <li>Registrar, investigar y resolver quejas, reclamos, controversias o aclaraciones con relación a sus préstamos y/o cualquier otro servicio solicitado a TANKEF y llevar a cabo cualquier otra actividad de soporte y atención al cliente.</li>
                        <li>Grabar o registrar información de las llamadas que usted realice al equipo de servicio al cliente de TANKEF. Compartir la información necesaria en caso de ser requerida por una autoridad competente.</li>
                        <li>Publicidad y ofertas sobre productos o servicios relacionados con el crédito contratado o el resto de los servicios ofrecidos por TANKEF en el Sitio Web y aplicación móvil.</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-8 mb-4">III.- TRANSFERENCIA DE DATOS PERSONALES.</h2>
                    <p className="text-justify">
                        Con fundamento en lo dispuesto en el artículo 37, de la Ley Federal de Protección de Datos Personales
                        en Posesión de los Particulares, sus datos personales podrán ser transferidos lícitamente a terceros
                        sin necesidad de su consentimiento únicamente en los siguientes casos:
                    </p>

                    <ol className="list-decimal pl-8 space-y-2">
                        <li>Cuando se trate de empresas nacionales o internacionales del mismo grupo, como subsidiarias, filiales, afiliadas, controladas o controladoras bajo el control común del responsable o a una sociedad matriz o a cualquier sociedad del mismo grupo responsable que opere bajo los mismos procesos y políticas internas;</li>
                        <li>Cuando la transferencia sea necesaria por virtud de un contrato celebrado o por celebrar en interés del titular, por el responsable y un tercero;</li>
                        <li>Cuando la transferencia sea necesaria o legalmente exigida por alguna autoridad para salvaguardar un interés público, o para la procuración o administración de justicia;</li>
                        <li>Cuando la transferencia sea precisa para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial y;</li>
                        <li>Cuando la transferencia sea precisa para el mantenimiento o cumplimiento de una relación jurídica entre el responsable y el titular.</li>
                    </ol>

                    <p className="text-justify">
                        Asimismo, el Usuario autoriza a TANKEF a transferir sus datos personales ante las Sociedades de
                        Información Crediticia "SIC") para consultar u obtener sus antecedentes crediticios o reporte de crédito
                        especial y/o la calificación crediticia "Score", por lo que el Usuario manifiesta que conoce el alcance
                        y uso que TANKEF y/o las SIC darán a sus datos personales. Salvo en los casos señalados y los demás
                        referidos en el artículo 37 de la Ley Federal de Protección de Datos Personales en Posesión de
                        Particulares, su información no será transferida a terceros.
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-4">IV.- ¿CÓMO PUEDE ACCEDER, RECTIFICAR O CANCELAR SUS DATOS PERSONALES, U OPONERSE A SU USO?</h2>
                    <p className="text-justify">
                        Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las
                        condiciones del usoque les damos (acceso). Asimismo, es su derecho solicitar la corrección de su información personal
                        en caso de que esté desactualizada, sea inexacta o incompleta (rectificación); que la eliminemos de
                        nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente
                        (cancelación); así como oponerse al uso de sus datos personales para fines específicos (oposición).
                        Estos derechos se conocen como derechos ARCO.
                    </p>

                    <p className="text-justify">
                        El usuario por sí mismo o mediante su representante legal debidamente acreditado, puedes ejercer sus
                        derechos de acceso, rectificación, cancelación u oposición al tratamiento de tus datos personales
                        (los "Derechos ARCO"). Para ello podrá solicitar un formato de ejercicio de Derechos ARCO mediante
                        el envío de un correo electrónico a la dirección de correo electrónico{' '}
                        <a href="mailto:contacto@tankef.com" className="text-blue-600 hover:underline">contacto@tankef.com</a>.
                    </p>

                    <p className="text-justify">
                        El formato de ejercicio de Derechos ARCO se deberá llenar, firmar y presentarse acompañado de la
                        siguiente documentación, a fin de que pueda llevarse a cabo la autenticación de usted:
                    </p>

                    <p className="text-justify">
                        Identificación oficial vigente (Credencial del Instituto Nacional Electoral, Pasaporte, Cartilla del
                        servicio Militar Nacional o Cédula Profesional) del usuario. En los casos en que el ejercicio de los
                        Derechos ARCO se realice a través de su representante legal, deberá acompañarse la identificación
                        oficial del representante, así como el poder correspondiente protocolizado que acredite la representación
                        legal conferida por el Titular. Cuando se quiera ejercer el derecho de rectificación, deberá exhibirse
                        la documentación que acredite el cambio solicitado de acuerdo a los datos personales a rectificar.
                    </p>

                    <p className="text-justify">
                        TANKEF le comunicará, en un plazo máximo de 20 (veinte) días hábiles, contados desde la fecha en que
                        aquél reciba la solicitud correspondiente, la determinación adoptada. Si la solicitud resulta procedente,
                        ésta se hará efectiva dentro de los 15 (quince) días hábiles siguientes a la fecha en que le sea
                        comunicada la respuesta. En caso de que la información proporcionada en su solicitud resulte errónea
                        o insuficiente, o no se acompañen los documentos necesarios para acreditar su identidad o la
                        representación legal correspondiente, dentro de los (5) cinco días hábiles siguientes a la recepción
                        de su solicitud, requerirá la subsanación de las deficiencias para poder dar trámite a la misma.
                        En estos casos, usted contará con 10 (diez) días hábiles para atender el requerimiento de subsanación,
                        contados a partir del día siguiente en que hubiere recibido esta solicitud. La solicitud correspondiente
                        se tendrá por no presentada si usted no responde dentro de dicho plazo.
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-4">V.- REVOCACIÓN DE CONSENTIMIENTO.</h2>
                    <p className="text-justify">
                        Usted puede revocar el consentimiento que nos haya otorgado para el tratamiento de sus datos personales.
                        En virtud de lo anterior, es importante que tenga en cuenta que no en todos los casos podremos atender
                        su solicitud o concluir el uso de sus datos personales de forma inmediata, ya que es posible que por
                        alguna obligación legal y/o crediticia requiramos seguir tratando sus datos personales. Asimismo,
                        debe considerar que, para ciertos fines, la revocación de su consentimiento implica que no podamos
                        seguir brindándole el servicio que nos solicita.
                    </p>

                    <p className="text-justify">
                        Para solicitar la revocación de su consentimiento deberá enviar un correo a la dirección{' '}
                        <a href="mailto:contacto@tankef.com" className="text-blue-600 hover:underline">contacto@tankef.com</a>
                        {' '}el "Formato de la Revocación del Consentimiento" y deberá seguir el procedimiento que será enviado
                        junto con su solicitud. Nosotros analizaremos su caso y le enviaremos respuesta a su solicitud de
                        acuerdo con nuestro procedimiento establecido.
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-4">VI.- ¿CÓMO PUEDE CONOCER LOS CAMBIOS EN ESTE AVISO DE PRIVACIDAD?</h2>
                    <p className="text-justify">
                        El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de
                        nuevos requerimientos legales; de nuestras propias necesidades por los servicios que ofrecemos; de
                        nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas.
                        Cualquier cambio o modificación al presente aviso podrá efectuarse por TANKEF en cualquier momento
                        y se dará a conocer a través de nuestra aplicación y/o página web.
                    </p>

                    <PageFooter />
                </div>
            </main>
        </div>
    );
}