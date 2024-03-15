import { Box, Button, IconButton, Link, Stack, Typography, useMediaQuery } from '@mui/material'
import './App.css'

// Logos
import LogoMGI from './assets/Nova logo-MGI.png'
import IlustracaoDesktop from './assets/MGI Contabilidade (17).png'
import LogoAgriNews from './assets/LogoAgriNews.png';
import LogoWeCompany from './assets/LogoWeCompany.png';
import LogoSoteLab from './assets/LogoSetoLab.png';
import LogoNOI from './assets/LogoNOI.png';
import LogoOttoboni from './assets/LogoOttoboni.png';
import LogoFitFashion from './assets/LogoFITFASHION.png';
import LogoMR from './assets/LogoMR.png';
import LogoGiorelli from './assets/LogoGiorelli.jpg';

// Ícones
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';




const App: React.FC = () => {

  const is900 = useMediaQuery('(min-width:900px)');

  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const emailAddress = 'mgicontabilidade@gmail.com';

  const whatsappNumber = '5521992838994';

  return (
    <>
      <Stack
        width="100%"
        height="100vh"
      >

        {/* Header */}
        <Stack
          zIndex={10}
          paddingTop=".5rem"
          height="100px"
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          position="fixed"
          top="0"
          left="0"
          bgcolor="#fff"
        >

          <Stack>
            <img style={{ width: "150px" }} src={LogoMGI} alt="Imagem modelo" />
          </Stack>

          <Stack direction="row" alignItems="center" width="40%" justifyContent="space-between" display={is900 ? "flex" : "none"}>
            <Button
              onClick={() => scrollToSection('section1')}
              sx={{
                textDecoration: "none",
                color: "#61a3f3",
                padding: "8px 16px",
                textTransform: "none",
                borderRadius: "8px",
                '&:hover': {
                  cursor: 'pointer',
                  outline: "1px solid #61a3f3",
                  bgcolor: "#61a3f3",
                  color: "#fff"
                }
              }}><Typography fontSize="22px">Início</Typography></Button>
            <Button
              onClick={() => scrollToSection('section2')}
              sx={{
                textDecoration: "none",
                color: "#61a3f3",
                padding: "8px 16px",
                textTransform: "none",
                borderRadius: "8px",
                '&:hover': {
                  cursor: 'pointer',
                  outline: "1px solid #61a3f3",
                  bgcolor: "#61a3f3",
                  color: "#fff"
                }
              }}><Typography fontSize="22px">Sobre</Typography></Button>
            <Button
              onClick={() => scrollToSection('section3')}
              sx={{
                textDecoration: "none",
                color: "#61a3f3",
                padding: "8px 16px",
                textTransform: "none",
                borderRadius: "8px",
                '&:hover': {
                  cursor: 'pointer',
                  outline: "1px solid #61a3f3",
                  bgcolor: "#61a3f3",
                  color: "#fff"
                }
              }}><Typography fontSize="22px">Planos</Typography></Button>
            <Button
              onClick={() => scrollToSection('section4')}
              sx={{
                textDecoration: "none",
                color: "#61a3f3",
                padding: "8px 16px",
                textTransform: "none",
                borderRadius: "8px",
                '&:hover': {
                  cursor: 'pointer',
                  outline: "1px solid #61a3f3",
                  bgcolor: "#61a3f3",
                  color: "#fff"
                }
              }}><Typography fontSize="22px">Contato</Typography></Button>
          </Stack>

        </Stack>

        <Stack mb={10} id="section1"></Stack>

        <Stack
          width="100%"
        >
          <Stack height="100%" padding="1rem 1rem 0 1rem" sx={{ background: "linear-gradient(236deg, rgba(91,221,228,1) 0%, rgba(33,127,193,1) 100%)" }} direction="row" justifyContent="space-around" alignItems="center">
            <Stack justifyContent="center" height="300px" m={2} >
              <Stack width={is900 ? "360px" : "100%"} mb={3}>
                <Typography fontWeight="bold" sx={is900 ? { color: "#fff", fontSize: "32px" } : { color: "#fff", fontSize: "28px", textAlign: "center" }}>Trilhe o caminho rumo a uma gestão contábil</Typography>
              </Stack>
              <Stack width={is900 ? "300px" : "100%"}>
                <Typography fontWeight="bold" sx={is900 ? { color: "#fff", fontSize: "42px", fontWeight: "bold" } : { color: "#fff", fontSize: "28px", textAlign: "center" }}>eficaz, tranquila,</Typography>
                <Typography fontWeight="bold" sx={is900 ? { color: "#fff", fontSize: "42px", fontWeight: "bold" } : { color: "#fff", fontSize: "28px", textAlign: "center" }}>& eficiente!</Typography>
              </Stack>

            </Stack>
            {is900 &&
              <Stack height="100%" width='60%' alignItems="center" justifyContent="flex-end">
                <img width="80%" src={IlustracaoDesktop} alt="" />
              </Stack>
            }
          </Stack>
        </Stack>

        <Stack mb={6} mt={5} id="section2"></Stack>

        {/* Seção 2 */}
        <Stack padding={is900 ? "1rem 4rem" : "10px"} mt={5} mb={5}>
          <Stack>
            <Stack ml={is900 ? 8 : 2} alignItems="center" justifyContent="center" width={is900 ? "300px" : "200px"} sx={{ bgcolor: "rgba(91,221,228,1)", padding: "8px", borderRadius: "8px", marginBottom: "-20px", zIndex: 1 }}>
              <Typography fontSize={is900 ? "32px" : "20px"} fontWeight="bold" sx={{ color: "#fff" }} >Quem somos?</Typography>
            </Stack>
            <Stack p={is900 ? 7 : 3} alignItems="flex-end" justifyContent="center" sx={{ bgcolor: "#69a6fa", borderRadius: "0 80px 80px 80px" }}>
              <Typography sx={{ color: "#fff", fontWeight: "bold", mb: 3, fontSize: "22px" }}>
                Desde 1991, MGI Contabilidade tem sido uma pedra angular na comunidade empresarial do Meier, Rio de Janeiro. Fundada por Maria das Graças Alves Marinho, nossa empresa tem sido uma fonte confiável de serviços de contabilidade empresarial, atendimento fiscal, contábil e departamento pessoal para uma variedade de empresas locais e regionais.
              </Typography>
              <Typography sx={{ color: "#fff", fontWeight: "bold", mb: 3, fontSize: "22px" }}>
                No centro de nossa abordagem está o compromisso com o atendimento personalizado. Reconhecemos que cada cliente tem necessidades únicas, e é por isso que trabalhamos em estreita colaboração com cada um para fornecer soluções sob medida que atendam às suas metas e objetivos específicos.
              </Typography>

              {is900 &&

                <Typography sx={{ color: "#fff", fontWeight: "bold", mb: 3, fontSize: "22px" }}>
                  Na MGI Contabilidade, também valorizamos a inovação e a tecnologia. Estamos constantemente atualizando nossos sistemas e adotando novas tecnologias para garantir eficiência e precisão em nossos serviços. Isso nos permite oferecer uma experiência contábil tranquila e transparente, garantindo conformidade legal e resultados excepcionais para nossos clientes.
                </Typography>
              }
            </Stack>
          </Stack>
        </Stack>

        <Stack mt={5} mb={5}>
          <Stack padding={is900 ? "0 4rem" : "0 2rem"}>
            <Typography fontSize="28px" fontWeight="bold" sx={{ color: "#5691e4" }}>Olá,</Typography>
            <Typography fontSize="24px" fontWeight="bold" sx={{ color: "#5691e4" }}>Conheça a nossa equipe...</Typography>
          </Stack>
          <Stack direction="row" padding="0 4rem" mt={5} justifyContent="space-around" flexWrap="wrap" gap={3}>
            <Stack mt={3} justifyContent="flex-end" alignItems="center" height="300px" width="300px" sx={{ outline: "1px solid #61a3fe", borderRadius: "80px 0 80px 0" }}>
              <img style={{ width: "100%", zIndex: 1, marginBottom: "-20px" }} src={IlustracaoDesktop} alt="" />
              <Stack width="80%" bgcolor="#056fcd" padding="0 4px" alignItems="center" mb="-20px" zIndex={2} sx={{ borderRadius: "20px 0 20px 0" }}>
                <Typography fontWeight="bold" sx={{ color: "#fff" }}>Marcelo Garcia</Typography>
                <Typography sx={{ color: "#fff" }}>CEO</Typography>

              </Stack>
            </Stack>
            <Stack mt={3} justifyContent="flex-end" alignItems="center" height="300px" width="300px" sx={{ outline: "1px solid #61a3fe", borderRadius: "80px 0 80px 0" }}>
              <img style={{ width: "100%", zIndex: 1, marginBottom: "-20px" }} src={IlustracaoDesktop} alt="" />
              <Stack width="80%" bgcolor="#056fcd" padding="0 4px" alignItems="center" mb="-20px" zIndex={2} sx={{ borderRadius: "20px 0 20px 0" }}>
                <Typography fontWeight="bold" sx={{ color: "#fff" }}>Marcelo Garcia</Typography>
                <Typography sx={{ color: "#fff" }}>CEO</Typography>

              </Stack>
            </Stack>
            <Stack mt={3} justifyContent="flex-end" alignItems="center" height="300px" width="300px" sx={{ outline: "1px solid #61a3fe", borderRadius: "80px 0 80px 0" }}>
              <img style={{ width: "100%", zIndex: 1, marginBottom: "-20px" }} src={IlustracaoDesktop} alt="" />
              <Stack width="80%" bgcolor="#056fcd" padding="0 4px" alignItems="center" mb="-20px" zIndex={2} sx={{ borderRadius: "20px 0 20px 0" }}>
                <Typography fontWeight="bold" sx={{ color: "#fff" }}>Marcelo Garcia</Typography>
                <Typography sx={{ color: "#fff" }}>CEO</Typography>

              </Stack>
            </Stack>
            <Stack mt={3} justifyContent="flex-end" alignItems="center" height="300px" width="300px" sx={{ outline: "1px solid #61a3fe", borderRadius: "80px 0 80px 0" }}>
              <img style={{ width: "100%", zIndex: 1, marginBottom: "-20px" }} src={IlustracaoDesktop} alt="" />
              <Stack width="80%" bgcolor="#056fcd" padding="0 4px" alignItems="center" mb="-20px" zIndex={2} sx={{ borderRadius: "20px 0 20px 0" }}>
                <Typography fontWeight="bold" sx={{ color: "#fff" }}>Marcelo Garcia</Typography>
                <Typography sx={{ color: "#fff" }}>CEO</Typography>

              </Stack>
            </Stack>
            <Stack mt={3} justifyContent="flex-end" alignItems="center" height="300px" width="300px" sx={{ outline: "1px solid #61a3fe", borderRadius: "80px 0 80px 0" }}>
              <img style={{ width: "100%", zIndex: 1, marginBottom: "-20px" }} src={IlustracaoDesktop} alt="" />
              <Stack width="80%" bgcolor="#056fcd" padding="0 4px" alignItems="center" mb="-20px" zIndex={2} sx={{ borderRadius: "20px 0 20px 0" }}>
                <Typography fontWeight="bold" sx={{ color: "#fff" }}>Marcelo Garcia</Typography>
                <Typography sx={{ color: "#fff" }}>CEO</Typography>

              </Stack>
            </Stack>

          </Stack>

        </Stack>

        <Stack padding={is900 ? "1rem 4rem" : "10px"} mt={10} mb={5}>
          <Stack>
            <Stack ml={is900 ? 8 : 2} alignItems="center" justifyContent="center" width="150px" sx={{ bgcolor: "rgba(91,221,228,1)", padding: "8px", borderRadius: "16px", marginBottom: "-30px", zIndex: 1 }}>
              <Typography fontWeight="bold" sx={{ color: "#fff" }} ><GroupsIcon sx={{ fontSize: 60 }} /></Typography>
            </Stack>
            <Stack p={is900 ? 7 : 5} alignItems="flex-end" justifyContent="center" sx={{ bgcolor: "#69a6fa", borderRadius: "0 80px 80px 80px" }}>
              <Typography sx={{ color: "#fff", fontWeight: "bold", mb: 3, fontSize: "22px" }}>
                Contando com uma equipe de profissionais experientes e qualificados, estamos bem equipados para enfrentar os desafios contábeis mais complexos e oferecer orientação especializada em todos os aspectos financeiros e empresariais. Nosso foco na qualidade e precisão nos permitiu construir relacionamentos de longo prazo com nossos clientes, tornando-nos uma escolha confiável ao longo dos anos.
              </Typography>
              <Typography sx={{ color: "#fff", fontWeight: "bold", mb: 3, fontSize: "22px" }}>
                Se você está procurando uma parceria de confiança para suas necessidades contábeis e empresariais, a MGI Contabilidade está aqui para ajudar. Entre em contato conosco hoje mesmo e descubra como podemos ajudá-lo a alcançar seus objetivos financeiros e empresariais.
              </Typography>

            </Stack>
          </Stack>
        </Stack>

        <Stack mb={5} mt={5} id="section3"></Stack>

        <Stack
          mt={5}
          sx={{
            padding: "1rem 3rem",
            background: "linear-gradient(236deg, rgba(33,127,193,1) 0%, rgba(91,221,228,1) 100%)"
          }}>
          <Stack alignItems="center" mt={5} mb={3}>
            <Typography fontSize="32px" sx={{ color: "#fff" }}>Confira</Typography>
            <Typography fontSize="32px" fontWeight="bold" sx={{ color: "#fff" }}>nossos planos:</Typography>
          </Stack>
          <Stack mt={5} direction="row" justifyContent="space-around" flexWrap="wrap" gap={3}>


            {/* Box White */}
            <Stack
              justifyContent="space-between"
              bgcolor="#fff"
              width="30%"
              minWidth="255px"
              maxWidth="400px"
              mb={3}
              sx={{

                padding: "2rem 1rem",
                borderRadius: "30px"
              }}
            >
              <Stack height="60%" justifyContent={"space-around"}>

                <Stack direction="row" alignItems="center" mb={2}>
                  <TaskAltIcon sx={{ mr: 1, color: "#02e8ff" }} />
                  <Typography fontWeight="bold">Empresa sem funcionários.</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" mb={2}>
                  <TaskAltIcon sx={{ mr: 1, color: "#02e8ff" }} />
                  <Typography fontWeight="bold">Pró-labore dos sócios: até 2 sócios.</Typography>
                </Stack>
              </Stack>

              <Stack>

                <Stack alignItems="center">
                  <Stack width="90%" mb={2} sx={{ border: '3px solid #02e8ff' }}>
                  </Stack>
                </Stack>
                <Stack alignItems="center">
                  <Typography sx={{ color: "#02e8ff" }} fontWeight="bold" fontSize={34}>Básico</Typography>
                </Stack>
              </Stack>
            </Stack>

            <Stack
              bgcolor="#fff"
              width="30%"
              minWidth="255px"
              maxWidth="400px"
              mb={3}
              sx={{

                padding: "2rem 1rem",
                borderRadius: "30px"
              }}
            >
              <Stack direction="row" alignItems="center" mb={2}>
                <TaskAltIcon sx={{ mr: 1, color: "#44a7ff" }} />
                <Typography fontWeight="bold">Folha de pagamento: Até 5 funcionários.</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" mb={2}>
                <TaskAltIcon sx={{ mr: 1, color: "#44a7ff" }} />
                <Typography fontWeight="bold">Pró-labore dos sócios: Até 3 sócios grátis.</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" mb={2}>
                <TaskAltIcon sx={{ mr: 1, color: "#44a7ff" }} />
                <Typography fontWeight="bold">Emissão de notas fiscais peça equipe MGI: Até 10 NFs/mês.</Typography>
              </Stack>

              <Stack alignItems="center">
                <Stack width="90%" mb={2} sx={{ border: '3px solid #44a7ff' }}>
                </Stack>
              </Stack>
              <Stack alignItems="center">
                <Typography sx={{ color: "#44a7ff" }} fontWeight="bold" fontSize={34}>Essencial</Typography>
              </Stack>

            </Stack>

            <Stack
              bgcolor="#fff"
              width="30%"
              minWidth="255px"
              maxWidth="400px"
              mb={3}
              sx={{

                padding: "2rem 1rem",
                borderRadius: "30px"
              }}
            >
              <Stack direction="row" alignItems="center" mb={2}>
                <TaskAltIcon sx={{ mr: 1, color: "#056fcd" }} />
                <Typography fontWeight="bold">Folha de pagamento: Até 10 funcionários.</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" mb={2}>
                <TaskAltIcon sx={{ mr: 1, color: "#056fcd" }} />
                <Typography fontWeight="bold">Pró-labore dos sócios: Até 5 sócios grátis.</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" mb={2}>
                <TaskAltIcon sx={{ mr: 1, color: "#056fcd" }} />
                <Typography fontWeight="bold">Emissão de notas fiscais peça equipe MGI: Até 10 NFs/mês.</Typography>
              </Stack>
              <Stack alignItems="center">
                <Stack width="90%" mb={2} sx={{ border: '3px solid #056fcd' }}>
                </Stack>
              </Stack>
              <Stack alignItems="center">
                <Typography sx={{ color: "#056fcd" }} fontWeight="bold" fontSize={34}>Standard</Typography>
              </Stack>

            </Stack>
          </Stack>
        </Stack>
        <Stack alignItems="center">
          <Box mt={5}>
            <Typography textAlign={"center"} fontSize="32px" sx={{ mr: 1, color: "#056fcd" }}>Alguns de <span style={{ fontWeight: "bold", color: "#056fcd" }}>nossos clientes</span><span style={{ fontWeight: "bold", color: "#31f9fa" }}>:</span> </Typography>
          </Box>
          <Stack direction="row" justifyContent="space-around" flexWrap="wrap" alignItems="center" gap={4} mt={10} mb={10} sx={{ padding: "0 2rem" }}>
            <img style={{ width: "23%", minWidth: "100px", maxWidth: "200px" }} src={LogoAgriNews} alt="Logo AgriNews" />
            <img style={{ width: "23%", minWidth: "100px", maxWidth: "200px" }} src={LogoWeCompany} alt="Logo We Company" />
            <img style={{ width: "23%", minWidth: "100px", maxWidth: "200px" }} src={LogoGiorelli} alt="Logo Giorelli" />
            <img style={{ width: "23%", minWidth: "100px", maxWidth: "200px" }} src={LogoSoteLab} alt="Logo Sotelab" />
            <img style={{ width: "23%", minWidth: "100px", maxWidth: "200px" }} src={LogoFitFashion} alt="Logo FitFashion" />
            <img style={{ width: "23%", minWidth: "100px", maxWidth: "200px" }} src={LogoNOI} alt="Logo NOI" />
            <img style={{ width: "23%", minWidth: "100px", maxWidth: "200px" }} src={LogoMR} alt="Logo MR" />
            <img style={{ width: "23%", minWidth: "100px", maxWidth: "200px" }} src={LogoOttoboni} alt="Logo Ottoboni" />
          </Stack>
        </Stack>
        <Stack alignItems="center">
          <Stack mt={5} width="80%" sx={{ borderTop: "4px solid #31f9fa" }}>

          </Stack>
        </Stack>
        <Stack id="section4" mt={is900 ? 15 : 5} mb={is900 ? 15 : 5} alignItems="center">
          <Box mb={5}>
            <Typography textAlign={"center"} fontSize="42px" sx={{ mr: 1, color: "#056fcd" }}>Entre em <span style={{ fontWeight: "bold", color: "#056fcd" }}>contato</span><span style={{ fontWeight: "bold", color: "#31f9fa" }}>:</span> </Typography>
          </Box>
          <Stack direction={is900 ? "row" : "column"} justifyContent={is900 ? "space-around" : {}}>
            <Button
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              sx={{
                width: "250px",
                bgcolor: "#31f9fa",
                m: 2,
                padding: "1rem",
                color: "#fff",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "16px",
                fontSize: "20px",
                outline: "2px solid #31f9fa",
                '&:hover': {
                  color: "#31f9fa"
                }
              }}><WhatsAppIcon sx={{ mr: 2, fontSize: 30 }} />WhatsApp</Button>
            <Button
              href={`mailto:${emailAddress}`}
              target="_blank"
              sx={{
                width: "250px",
                bgcolor: "#31f9fa",
                m: 2,
                padding: "1rem",
                color: "#fff",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "16px",
                fontSize: "20px",
                outline: "2px solid #31f9fa",
                '&:hover': {
                  color: "#31f9fa"
                }
              }}><MailOutlineIcon sx={{ mr: 2, fontSize: 30 }} />Email</Button>
          </Stack>
        </Stack>
        <Stack bgcolor="#056fcd" padding="2rem" justifyContent="space-around">
          <Stack direction={is900 ? "row" : "column"} justifyContent="space-between">
            <Stack width={is900 ? "30%" : {}} alignItems={is900 ? {} : "center"}>
              <Stack mb={2}>
                <Typography fontWeight="bold" color="#fff" sx={{ display: "flex", alignItems: "center" }}>Localização</Typography>
              </Stack>
              <Stack>
                <Typography sx={{ mb: 1, }} color="#fff"><Link sx={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#fff", textTransform: "none", "&:hover": { textDecoration: "underline" } }} href="https://maps.app.goo.gl/PnRDDok4ErzcoyZN7" target="_blank"><PlaceIcon sx={{ mr: 1 }} />R. Dias da Cruz, 148 - Sala 402 <br />Méier, Rio de Janeiro - RJ</Link></Typography>
                <Typography sx={{ mb: 1, }} color="#fff"><Link sx={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#fff", textTransform: "none", "&:hover": { textDecoration: "underline" } }} href={`mailto:${emailAddress}`} target="_blank"><EmailIcon sx={{ mr: 1 }} />mgicontabilidade@gmail.com</Link></Typography>
                <Typography sx={{ mb: 1, }} color="#fff"><Link sx={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#fff", textTransform: "none", "&:hover": { textDecoration: "underline" } }} href={`https://wa.me/${whatsappNumber}`} target="_blank"><LocalPhoneIcon sx={{ mr: 1 }} />+55 (21) 9 9283-8994</Link></Typography>
              </Stack>

            </Stack>
            <Stack width={is900 ? "30%" : {}} mt={is900 ? 0 : 5} mb={is900 ? 0 : 5} alignItems="center">
              <Stack mb={2}>
                <Typography fontWeight="bold" color="#fff">MGI na rede:</Typography>
              </Stack>
              <Stack direction='row' width="200px" justifyContent="space-around">
                <IconButton
                  sx={{
                    color: "#fff",
                    '&:hover': {
                      bgcolor: "#fff",
                      color: "#056fcd"
                    }
                  }}>
                  <InstagramIcon sx={{ fontSize: 30 }} />
                </IconButton>
                <IconButton
                  sx={{
                    color: "#fff",
                    '&:hover': {
                      bgcolor: "#fff",
                      color: "#056fcd"
                    }
                  }}>
                  <FacebookIcon sx={{ fontSize: 30 }} />
                </IconButton>
                <IconButton
                  sx={{
                    color: "#fff",
                    '&:hover': {
                      bgcolor: "#fff",
                      color: "#056fcd"
                    }
                  }}>
                  <LinkedInIcon sx={{ fontSize: 30 }} />
                </IconButton>

              </Stack>
            </Stack>
            <Stack width={is900 ? "30%" : {}} alignItems={is900 ? "flex-end" : "center"} mb={is900 ? {} : 5}>
              <Stack mb={2}>
                <Typography textAlign={is900 ? "end" : "center"} fontWeight="bold" color="#fff" >Horário de funcionamento</Typography>
              </Stack>
              <Stack>
                <Typography textAlign={is900 ? "end" : "center"} color="#fff">
                  De Segunda à Sexta:
                </Typography>
                <Typography textAlign={is900 ? "end" : "center"} color="#fff">
                  das 08:30 às 17:30
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack alignItems="center" mt={3}>
            <Typography sx={is900 ? {} : { mb: 2 }} textAlign="center" color="#fff">&copy; Copyright - 2024, MGI Contabilidade. Todos os direitos reservados</Typography>
            <Typography textAlign="center" color="#fff">Desenvolvido por <Link sx={{ textDecoration: "none", color: "#fff", textTransform: "none", "&:hover": { textDecoration: "underline" } }} href="https://www.linkedin.com/in/rodrigo-podanosqui-939706230/" target='_blank'>Rodrigo Podanosqui</Link></Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default App;
