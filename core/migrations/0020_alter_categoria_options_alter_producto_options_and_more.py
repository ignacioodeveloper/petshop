# Generated by Django 5.0.4 on 2024-05-24 21:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0019_rename_usuario_perfil_user'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='categoria',
            options={},
        ),
        migrations.AlterModelOptions(
            name='producto',
            options={'verbose_name': 'Producto', 'verbose_name_plural': 'Productos'},
        ),
        migrations.AlterField(
            model_name='perfil',
            name='tipo_usuario',
            field=models.CharField(choices=[('Cliente', 'Cliente'), ('Administrador', 'Administrador'), ('Superusuario', 'Superusuario')], max_length=50, verbose_name='tipo de usuario'),
        ),
        migrations.AlterModelTable(
            name='bodega',
            table='bodega',
        ),
        migrations.AlterModelTable(
            name='boleta',
            table='boleta',
        ),
        migrations.AlterModelTable(
            name='carrito',
            table='carrito',
        ),
        migrations.AlterModelTable(
            name='categoria',
            table='categoria',
        ),
        migrations.AlterModelTable(
            name='detalleboleta',
            table='detalleboleta',
        ),
        migrations.AlterModelTable(
            name='perfil',
            table='perfil',
        ),
        migrations.AlterModelTable(
            name='producto',
            table='producto',
        ),
    ]
