using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace CoreUI.Mvc
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Run();

            /*
            IConfigurationRoot config = CreateConfiguration();
            X509Certificate2 certificate = CreateCertificate(config);
            BuildWebHost(args, certificate, config).Run();
            */
        }

        /// <summary>
        /// Original configuration
        /// </summary>
        /// <param name="args"></param>
        /// <returns></returns>
        public static IWebHost CreateWebHostBuilder(string[] args)
        {
            return WebHost
                .CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
        }

        /// <summary>
        /// Configuration for HTTPS
        /// </summary>
        /// <param name="args"></param>
        /// <param name="config"></param>
        /// <returns></returns>
        public static IWebHost BuildWebHost(string[] args, X509Certificate2 certificate, IConfigurationRoot config)
        {
            return new WebHostBuilder()
            .UseKestrel(
                options =>
                {
                    options.AddServerHeader = false;
                    options.Listen(IPAddress.Loopback, 44321, listenOptions =>
                    {
                        listenOptions.UseHttps(certificate);
                    });
                }
            )
            .UseConfiguration(config)
            .UseContentRoot(Directory.GetCurrentDirectory())
            .UseStartup<Startup>()
            .UseUrls("https://localhost:44321")
            .Build();
        }

        /// <summary>
        /// Add an external configuration file
        /// </summary>
        /// <returns></returns>
        public static IConfigurationRoot CreateConfiguration()
        {
            return new ConfigurationBuilder()
               .SetBasePath(Directory.GetCurrentDirectory())
               .AddEnvironmentVariables()
               .AddJsonFile("certificate.json", optional: true, reloadOnChange: true)
               .AddJsonFile($"certificate.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")}.json", optional: true, reloadOnChange: true)
               .Build();
        }

        /// <summary>
        /// Create a certificate settings
        /// </summary>
        /// <param name="config"></param>
        /// <returns></returns>
        public static X509Certificate2 CreateCertificate(IConfigurationRoot config)
        {
            var certificateSettings = config.GetSection("certificateSettings");
            string certificateFileName = certificateSettings.GetValue<string>("filename");
            string certificatePassword = certificateSettings.GetValue<string>("password");

            return new X509Certificate2(certificateFileName, certificatePassword);
        }
    }
}
